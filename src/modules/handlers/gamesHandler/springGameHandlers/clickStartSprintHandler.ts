import { FIRST_PAGE, LAST_PAGE, EStatusCode } from '@constants';
import changeTimer from '@modules/helpers/changeTimer';
import { temporalWordsData, initTemporalWordsData } from '@modules/store/temporalData/temporalWordsData';
import { getRandomInteger } from '@modules/utils';
import getWords from '@services/words/getWords';
import { wordsDataLocal } from '@store/wordsData/initWordsData';
import { TWordContent } from '@types';
import renderSprintGame from '@view/pages/Sprint';
import clickSprintButtonsHandler from './clickSprintButtonsHandler';

const clickStartSprintHandler = (flag: boolean) => {
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  playButton.addEventListener('click', async () => {
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
    const response = await getWords(group, page);

    if (response.status === EStatusCode.OK) {
      const words: TWordContent[] = await response.json();
      initTemporalWordsData(words);

      gameLayout.innerHTML = renderSprintGame();

      changeTimer();
      clickSprintButtonsHandler();
    }
  });
};

export default clickStartSprintHandler;
