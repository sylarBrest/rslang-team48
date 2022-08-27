import {
  BLANK_SPACE,
  DIGIT_1, DIGIT_2, DIGIT_3, DIGIT_4, DIGIT_5, ENTER, INDEX_0, INDEX_1, INDEX_2, INDEX_3, INDEX_4, VISIBLE,
} from '@constants';
import { changeVisibility, showGameResult } from '@helpers';
import { temporalWordsData } from '@store';

export const clickTranslationByKeyboardHandler = (e: KeyboardEvent) => {
  const translateButtons = document.querySelectorAll<HTMLButtonElement>('.game__audiocall-button');
  const nextButton = <HTMLButtonElement>document.querySelector('.game__audiocall-next-button');
  const audio = <HTMLButtonElement>document.querySelector('.game__audiocall-audio');

  switch (e.key) {
    case DIGIT_1:
      translateButtons[INDEX_0].click();

      break;
    case DIGIT_2:
      translateButtons[INDEX_1].click();

      break;
    case DIGIT_3:
      translateButtons[INDEX_2].click();

      break;
    case DIGIT_4:
      translateButtons[INDEX_3].click();

      break;
    case DIGIT_5:
      translateButtons[INDEX_4].click();

      break;
    case ENTER:
      nextButton.click();

      break;
    case BLANK_SPACE:
      audio.click();

      break;

    default:
      break;
  }
};

const clickTranslationButtonsHandler = () => {
  const translateButtons = <HTMLElement>document.querySelector('.game__audiocall-translate-buttons');

  translateButtons.addEventListener('click', (e: Event) => {
    const target = <HTMLElement>e.target;
    const { dictionary } = temporalWordsData;
    const wordElement = <HTMLElement>document.querySelector('.game__audiocall-word');
    const wordText = String(wordElement.textContent);
    const buttons = document.querySelectorAll<HTMLButtonElement>('.game__audiocall-button');

    const audioCorrect = new Audio('./src/assets/audio/correct.mp3');
    const audioIncorrect = new Audio('./src/assets/audio/error.mp3');

    if (target && target.classList.contains('game__audiocall-button')) {
      changeVisibility(VISIBLE);

      let answer = false;

      if (target.textContent === dictionary[wordText].wordTranslate) {
        answer = true;
      }

      if (answer) {
        audioCorrect.play();
      } else audioIncorrect.play();

      const result = {
        id: dictionary[wordText].id,
        word: wordText,
        wordTranslate: dictionary[wordText].wordTranslate,
        isCorrectAnswer: String(answer),
      };

      temporalWordsData.gameAnswers.push(result);

      buttons.forEach((item) => {
        const elem = item;

        elem.setAttribute('disabled', '');

        if (item === target) {
          elem.style.backgroundColor = '#FF0000';
        }

        if (item.textContent === dictionary[wordText].wordTranslate) {
          elem.style.backgroundColor = '#32CD32';
        }
      });

      if (!temporalWordsData.translationOptions?.length) {
        showGameResult();
      }
    }
  });

  window.addEventListener('keydown', clickTranslationByKeyboardHandler);
};

export default clickTranslationButtonsHandler;
