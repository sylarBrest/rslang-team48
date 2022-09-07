import { HOST } from '@constants';
import { getRandomWordsTranslation } from '@helpers';
import { temporalWordsData } from '@store';

import './style.scss';

const renderAudiocallGame = () => {
  const { dictionary, translationOptions } = temporalWordsData;
  const {
    word, wordTranslateOne, wordTranslateTwo, wordTranslateThree, wordTranslateFour, wordTranslateFive,
  } = getRandomWordsTranslation();

  return `
    <div class="game__audiocall">
      <div class="game__audiocall-progress-bar">
        <progress id="progress-bar" max="${translationOptions.length}" value="0"></progress>
      </div>
      <div class="game__audiocall-header">
        <img src="${HOST}/${dictionary[word].image}" class="game__audiocall-img"></img>
        <button class="game__audiocall-audio"></button>
        <div class="game__audiocall-word">${word}</div>
      </div>
      <div class="game__audiocall-translate-buttons">
        <button class="game__audiocall-option-one game__audiocall-button">${wordTranslateOne}</button>
        <button class="game__audiocall-option-two game__audiocall-button">${wordTranslateTwo}</button>
        <button class="game__audiocall-option-three game__audiocall-button">${wordTranslateThree}</button>
        <button class="game__audiocall-option-four game__audiocall-button">${wordTranslateFour}</button>
        <button class="game__audiocall-option-five game__audiocall-button">${wordTranslateFive}</button>
      </div>
      <div class="game__audiocall-footer">
        <button class="game__audiocall-next-button">Далее</button>
      <div class="game__audiocall-footer">
    </div>
  `;
};

export default renderAudiocallGame;
