import { ANSWER_TIME, SECOND, ZERO } from '@constants';
import showGameResult from './showGameResult';

const changeTimer = () => {
  let counter = ANSWER_TIME;

  const timerID = setInterval(() => {
    const value = <HTMLElement>document.querySelector('.game__sprint-timer');

    if (!value) {
      clearInterval(timerID);
    } else if (value.textContent === ZERO) {
      clearInterval(timerID);
      showGameResult();
    } else {
      /* eslint-disable no-plusplus */
      value.innerHTML = String(--counter);
      /* eslint-enable no-plusplus */
    }
  }, SECOND);
};

export default changeTimer;
