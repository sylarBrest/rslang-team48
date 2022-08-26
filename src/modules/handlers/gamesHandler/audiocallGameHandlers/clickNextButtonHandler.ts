/* eslint-disable no-plusplus */
import { HOST } from '@modules/constants';
import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';
import getRandomWordsTranslation from '@modules/helpers/getRandomWordsTranslation';
import playAudio from '@modules/helpers/playAudio';

const clickNextButtonHandler = () => {
  const nextButton = <HTMLButtonElement>document.querySelector('.game__audiocall-next-button');

  nextButton.addEventListener('click', () => {
    const { dictionary } = temporalSprintWordsData;
    const progress = <HTMLProgressElement>document.querySelector('progress');
    const img = <HTMLImageElement>document.querySelector('.game__audiocall-img');
    const wordElement = <HTMLElement>document.querySelector('.game__audiocall-word');
    const translateButtons = <HTMLElement>document.querySelector('.game__audiocall-translate-buttons');

    const {
      word, wordTranslateOne, wordTranslateTwo, wordTranslateThree, wordTranslateFour, wordTranslateFive,
    } = getRandomWordsTranslation();

    progress.value = ++progress.value;
    img.src = `${HOST}/${dictionary[word].image}`;
    wordElement.textContent = word;
    translateButtons.innerHTML = `
      <button class="game__audiocall-option-one game__audiocall-button">${wordTranslateOne}</button>
        <button class="game__audiocall-option-two game__audiocall-button">${wordTranslateTwo}</button>
        <button class="game__audiocall-option-three game__audiocall-button">${wordTranslateThree}</button>
        <button class="game__audiocall-option-four game__audiocall-button">${wordTranslateFour}</button>
        <button class="game__audiocall-option-five game__audiocall-button">${wordTranslateFive}</button>
    `;

    img.style.visibility = 'hidden';
    wordElement.style.visibility = 'hidden';
    nextButton.style.visibility = 'hidden';

    playAudio();
  });
};

export default clickNextButtonHandler;
