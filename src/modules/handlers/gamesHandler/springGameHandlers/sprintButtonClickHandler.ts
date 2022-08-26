import { FALSE, TRUE } from '@constants';
import getRandomWordPairs from '@modules/helpers/getRandomWordPairs';
import showGameResult from '@modules/helpers/showGameResult';
import { temporalSprintWordsData } from '@store/temporalData/temporalSprintWordsData';

export const getWordsDataByMouseClick = (e: Event) => {
  const wordElem = <HTMLElement>document.querySelector('.game__sprint-word');
  const wordTranslateElem = <HTMLElement>document.querySelector('.game__sprint-word-translate');
  const wordText = String(wordElem.textContent);
  const wordTranslateText = String(wordTranslateElem.textContent);
  const audioCorrect = new Audio('./src/assets/audio/correct.mp3');
  const audioIncorrect = new Audio('./src/assets/audio/error.mp3');
  const bool = (<HTMLButtonElement>e.target).getAttribute('data-boolean');

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
    showGameResult();
  }

  wordElem.innerHTML = pair.word;
  wordTranslateElem.innerHTML = pair.wordTranslate;
};

export const getWordsDataByKeyboardClick = (e: KeyboardEvent) => {
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
