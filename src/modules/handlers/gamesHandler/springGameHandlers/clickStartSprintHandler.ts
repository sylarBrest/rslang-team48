import { FIRST_PAGE, LAST_PAGE } from '@modules/constants/common';
import { EStatusCode } from '@modules/constants/services';
import getWords from '@modules/services/words/getWords';
import {
  initTemporalSprintWordsData, temporalSprintWordsData,
} from '@modules/store/temporalData/temporalSprintWordsData';
import { wordsDataLocal } from '@modules/store/wordsData/initWordsData';
import { TWordContent } from '@modules/types';
import getRandomInteger from '@modules/utils/getRandomInteger';

const clickStartSprintHandler = (flag: boolean) => {
  const main = <HTMLElement>document.querySelector('.main');
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  playButton.addEventListener('click', async () => {
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
      console.log(words, main);
      initTemporalSprintWordsData(words);
      console.log(temporalSprintWordsData.sprintWordPairs);

      // initTemporalWordsData(words);

      // const sprint = <HTMLElement>document.querySelector('.sprint');

      // const pair = getRandomPairOfWords();

      // if (pair) sprint.innerHTML = renderSprintGame(pair.word, pair.wordTranslate);

      // timer();
      // sprintClickHandler();
    }
  });
};

export default clickStartSprintHandler;
