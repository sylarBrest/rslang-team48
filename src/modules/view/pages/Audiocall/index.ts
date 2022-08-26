import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';
import getRandomWordsTranslation from '@modules/utils/getRandomWordsTranslation';

const renderAudiocallGame = () => {
  const { dictionary, translationOptions } = temporalSprintWordsData;
  const {
    word, wordTranslateOne, wordTranslateTwo, wordTranslateThree, wordTranslateFour, wordTranslateFive,
  } = getRandomWordsTranslation();

  return `
    <div class="game__audiocall">
      <div class="game__audiocall-progress-bar">
        <progress id="progress-bar" max="${translationOptions.length}" value="1"></progress>
      </div>
      <div class="game__audiocall-header">
        <div class="game__audiocall-img">${dictionary[word].image}</div>
        <div class="game__audiocall-audio"></div>
        <div class="game__audiocall-word">${word}</div>
      </div>
      <div class="game__audiocall-translate-buttons">
        <button class="game__audiocall-option-one">${wordTranslateOne}</button>
        <button class="game__audiocall-option-two">${wordTranslateTwo}</button>
        <button class="game__audiocall-option-three">${wordTranslateThree}</button>
        <button class="game__audiocall-option-four">${wordTranslateFour}</button>
        <button class="game__audiocall-option-five">${wordTranslateFive}</button>
      </div>
      <div class="game__audiocall-next-wrapper">
        <button class="game__audiocall-next-button">Далее</button>
      </div>
    </div>
  `;
};

export default renderAudiocallGame;
