import { FIRST_PAGE, LAST_PAGE, EStatusCode } from '@modules/constants';
import getWords from '@modules/services/words/getWords';
import {
  initTemporalSprintWordsData,
  temporalSprintWordsData,
} from '@modules/store/temporalData/temporalSprintWordsData';
import { wordsDataLocal } from '@modules/store/wordsData/initWordsData';
import { TWordContent } from '@modules/types';
import { getRandomInteger } from '@modules/utils';
import playAudio from '@modules/helpers/playAudio';
import renderAudiocallGame from '@modules/view/pages/Audiocall';
import clickNextButtonHandler from './clickNextButtonHandler';
import clickPlayAudioHandler from './clickPlayAudioHandler';
import clickTranslationButtonsHandler from './clickTranslationButtonsHandler';

const clickStartAudiocallHandler = (flag: boolean) => {
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  playButton.addEventListener('click', async () => {
    temporalSprintWordsData.gameAnswers = [];
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

      gameLayout.innerHTML = renderAudiocallGame();

      playAudio();
      clickPlayAudioHandler();
      clickNextButtonHandler();
      clickTranslationButtonsHandler();
    }
  });
};

export default clickStartAudiocallHandler;
