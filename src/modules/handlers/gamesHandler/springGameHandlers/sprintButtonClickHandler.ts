import { FALSE, TRUE } from '@modules/constants/common';
import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';
import getRandomWordPairs from '@modules/utils/getRandomWordPairs';

export const getWordsDataByMouseClick = (e: Event) => {
  const wordElem = <HTMLElement>document.querySelector('.game__sprint-word');
  const wordTranslateElem = <HTMLElement>document.querySelector('.game__sprint-word-translate');
  const wordText = String(wordElem.textContent);
  const wordTranslateText = String(wordTranslateElem.textContent);
  const audioCorrect = new Audio('./src/assets/audio/correct.mp3');
  const audioIncorrect = new Audio('./src/assets/audio/error.mp3');
  const bool = (<HTMLButtonElement>e.target).getAttribute('data-boolean');

  // if (e instanceof KeyboardEvent && e.key === 'ArrowLeft') {
  //   bool = FALSE;
  // } else {
  //   bool = TRUE;
  // }

  let answer = false;

  if (bool === TRUE && temporalSprintWordsData.dictionary[wordText].wordTranslate === wordTranslateText) {
    answer = true;
  }

  if (bool === TRUE && temporalSprintWordsData.dictionary[wordText].wordTranslate !== wordTranslateText) {
    answer = false;
  }

  if (bool === FALSE && temporalSprintWordsData.dictionary[wordText].wordTranslate === wordTranslateText) {
    answer = false;
  }

  if (bool === FALSE && temporalSprintWordsData.dictionary[wordText].wordTranslate !== wordTranslateText) {
    answer = true;
  }

  if (answer) {
    audioCorrect.play();
  } else {
    audioIncorrect.play();
  }

  const result = {
    id: temporalSprintWordsData.dictionary[wordText].id,
    word: wordText,
    wordTranslate: wordTranslateText,
    isCorrectAnswer: String(answer),
  };

  temporalSprintWordsData.gameAnswers.push(result);

  const pair = getRandomWordPairs();

  if (!temporalSprintWordsData.wordPairs?.length) {
    alert('закончились');
    // let fragment = '';
    // temporalWordsData.sprintGameAnswers.forEach((item) => {
    //   fragment += renderSprintResult(String(item.wordText), String(item.wordTranslateText), String(item.answer));
    // });
    // const sprint = <HTMLElement>document.querySelector('.sprint');
    // sprint.innerHTML = `
    //     <div class="sprint__result">
    //     <button class="sprint__result-play-again">Играть снова</button>
    //       ${fragment}
    //     </div>
    //   `;
    // temporalWordsData.sprintGameAnswers = [];
    // window.removeEventListener('keydown', getWordsDataByClick);
    // sprintPlayAgainHandler();
  }

  wordElem.innerHTML = pair.word;
  wordTranslateElem.innerHTML = pair.wordTranslate;
};

const getWordsDataByKeyboardClick = (e: KeyboardEvent) => {
  const rightButton = <HTMLButtonElement>document.querySelector('.sprint__play-true');
  const wrongButton = <HTMLButtonElement>document.querySelector('.sprint__play-false');

  if (e.key === 'ArrowLeft') {
    wrongButton.click();
  }

  if (e.key === 'ArrowRight') {
    rightButton.click();
  }
};

const sprintClickHandler = () => {
  const rightButton = <HTMLButtonElement>document.querySelector('.sprint__play-true');
  const wrongButton = <HTMLButtonElement>document.querySelector('.sprint__play-false');

  rightButton.addEventListener('click', getWordsDataByMouseClick);
  wrongButton.addEventListener('click', getWordsDataByMouseClick);
  window.addEventListener('keydown', getWordsDataByKeyboardClick);
};

export default sprintClickHandler;
