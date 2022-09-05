import { HIDDEN, HOST } from '@constants';
import {
  changeVisibility, getRandomWordsTranslation, playAudio, showGameResult,
} from '@helpers';
import { temporalWordsData } from '@store';
import { clickTranslationByKeyboardHandler } from './clickTranslationButtonsHandler';

const clickNextButtonHandler = () => {
  const nextButton = <HTMLButtonElement>document.querySelector('.game__audiocall-next-button');

  nextButton.addEventListener('click', () => {
    const { dictionary } = temporalWordsData;
    const img = <HTMLImageElement>document.querySelector('.game__audiocall-img');
    const wordElement = <HTMLElement>document.querySelector('.game__audiocall-word');
    const translateButtons = <HTMLElement>document.querySelector('.game__audiocall-translate-buttons');

    if (!temporalWordsData.translationOptions?.length) {
      showGameResult();
      window.removeEventListener('keydown', clickTranslationByKeyboardHandler);
    } else {
      const {
        word, wordTranslateOne, wordTranslateTwo, wordTranslateThree, wordTranslateFour, wordTranslateFive,
      } = getRandomWordsTranslation();

      img.src = `${HOST}/${dictionary[word].image}`;
      wordElement.textContent = word;
      translateButtons.innerHTML = `
      <button class="game__audiocall-option-one game__audiocall-button">${wordTranslateOne}</button>
        <button class="game__audiocall-option-two game__audiocall-button">${wordTranslateTwo}</button>
        <button class="game__audiocall-option-three game__audiocall-button">${wordTranslateThree}</button>
        <button class="game__audiocall-option-four game__audiocall-button">${wordTranslateFour}</button>
        <button class="game__audiocall-option-five game__audiocall-button">${wordTranslateFive}</button>
      `;

      changeVisibility(HIDDEN);

      playAudio();
    }
  });
};

export default clickNextButtonHandler;
