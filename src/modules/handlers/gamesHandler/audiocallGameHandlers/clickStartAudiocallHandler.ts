import { FIRST_PAGE, LAST_PAGE, EStatusCode } from '@constants';
import getWords from '@services/words/getWords';
import { temporalWordsData, initTemporalWordsData, wordsDataLocal } from '@store';
import { TWordContent } from '@types';
import { getRandomInteger } from '@utils';
import { playAudio } from '@helpers';
import renderAudiocallGame from '@view/pages/Audiocall';
import clickNextButtonHandler from './clickNextButtonHandler';
import clickPlayAudioHandler from './clickPlayAudioHandler';
import clickTranslationButtonsHandler from './clickTranslationButtonsHandler';

const clickStartAudiocallHandler = (flag: boolean) => {
  const playButton = <HTMLButtonElement>document.querySelector('.game__play-button');

  playButton.addEventListener('click', async () => {
    temporalWordsData.game = 'audiocall';
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

      gameLayout.innerHTML = renderAudiocallGame();

      playAudio();
      clickPlayAudioHandler();
      clickNextButtonHandler();
      clickTranslationButtonsHandler();
    }
  });
};

export default clickStartAudiocallHandler;
