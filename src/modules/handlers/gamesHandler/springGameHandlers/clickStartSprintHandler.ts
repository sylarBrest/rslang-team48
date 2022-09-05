import {
  FIRST_PAGE, LAST_PAGE, EStatusCode, WORDS_PER_PAGE, WITHOUT_KNOWN_FILTER, MIN_WORDS_FOR_GAME,
} from '@constants';
import { changeTimer, showGameResult } from '@helpers';
import {
  temporalWordsData, initTemporalWordsData, wordsDataLocal, userDataLocal,
} from '@store';
import { getRandomInteger } from '@utils';
import getWords from '@services/words/getWords';
import renderSprintGame from '@view/pages/Sprint';
import { TWordContent } from 'modules/types/words';
import getAllAggregatedWords from '@services/users/aggregatedWords/getAllAggregatedWords';
import { TAggregatedWord } from 'modules/types/aggregated';
import clickSprintButtonsHandler from './clickSprintButtonsHandler';

const clickStartSprintHandler = (flag: boolean) => {
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  // eslint-disable-next-line consistent-return
  playButton.addEventListener('click', async () => {
    temporalWordsData.game = 'sprint';
    temporalWordsData.gameAnswers = [];
    const gameLayout = <HTMLElement>document.querySelector('.game__layout');
    const activeLvlBtn = document.querySelectorAll<HTMLButtonElement>('.game__level-button');

    let selectedGroup = '';

    activeLvlBtn.forEach((elem) => {
      if (elem.classList.contains('active-level-btn')) {
        selectedGroup = String(elem.getAttribute('data-group'));
      }
    });

    const randomPage = String(getRandomInteger(FIRST_PAGE, LAST_PAGE));
    const group = flag ? selectedGroup : wordsDataLocal.group;
    const page = flag ? randomPage : wordsDataLocal.page;
    const response = userDataLocal
      ? await getAllAggregatedWords({
        group,
        page,
        wordsPerPage: WORDS_PER_PAGE,
        filter: WITHOUT_KNOWN_FILTER,
      })
      : await getWords(group, page);

    if (response.status === EStatusCode.OK) {
      const words: TAggregatedWord[] | TWordContent[] = await response.json();

      if (userDataLocal) {
        const aggregatedWords = [...(<TAggregatedWord[]>words)[0].paginatedResults];
        if (aggregatedWords.length < MIN_WORDS_FOR_GAME) {
          showGameResult();

          const tooFewWords = <HTMLElement>document.querySelector('.game__result-table-wrapper');
          tooFewWords.innerHTML = `
            <div class="too-few-words">Недостаточно слов для игры</div>
          `;
          return '';
        }

        initTemporalWordsData(aggregatedWords);
      } else {
        initTemporalWordsData(<TWordContent[]>words);
      }

      gameLayout.innerHTML = renderSprintGame();

      changeTimer();
      clickSprintButtonsHandler();
    }
  });
};

export default clickStartSprintHandler;
