import showGameResult from '@modules/helpers/showGameResult';
import { temporalWordsData } from '@modules/store/temporalData/temporalWordsData';

const clickTranslationButtonsHandler = () => {
  const translateButtons = <HTMLElement>document.querySelector('.game__audiocall-translate-buttons');

  translateButtons.addEventListener('click', (e: Event) => {
    const target = <HTMLElement>e.target;
    const { dictionary } = temporalWordsData;
    const img = <HTMLImageElement>document.querySelector('.game__audiocall-img');
    const wordElement = <HTMLElement>document.querySelector('.game__audiocall-word');
    const wordText = String(wordElement.textContent);
    const buttons = document.querySelectorAll<HTMLButtonElement>('.game__audiocall-button');
    const nextButton = <HTMLButtonElement>document.querySelector('.game__audiocall-next-button');

    const audioCorrect = new Audio('./src/assets/audio/correct.mp3');
    const audioIncorrect = new Audio('./src/assets/audio/error.mp3');

    if (target && target.classList.contains('game__audiocall-button')) {
      img.style.visibility = 'visible';
      wordElement.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';

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
};

export default clickTranslationButtonsHandler;
