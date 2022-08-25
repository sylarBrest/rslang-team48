import { FIRST_PAGE, LAST_PAGE, EStatusCode } from '@constants';
import getWords from '@services/words/getWords';
import { initTemporalSprintWordsData, temporalSprintWordsData } from '@store/temporalData/temporalSprintWordsData';
import { wordsDataLocal } from '@store/wordsData/initWordsData';
import { TWordContent } from '@types';
import { changeTimer, getRandomInteger } from '@utils';
import renderSprintGame from '@view/pages/Sprint';
import sprintClickHandler from './sprintButtonClickHandler';

const clickStartSprintHandler = (flag: boolean) => {
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  playButton.addEventListener('click', async () => {
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
      initTemporalSprintWordsData(words);
      console.log(temporalSprintWordsData.translationOptions);

      gameLayout.innerHTML = renderSprintGame();

      changeTimer();
      sprintClickHandler();
    }
  });
};

export default clickStartSprintHandler;
