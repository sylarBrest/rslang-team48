/* eslint-disable no-plusplus */
import { ANSWER_TIME, SECOND, ZERO } from '@modules/constants/common';
import showGameResult from './showGameResult';

const changeTimer = () => {
  let counter = ANSWER_TIME;

  const value = <HTMLElement>document.querySelector('.game__sprint-timer');

  const timerID = setInterval(() => {
    if (value.textContent === ZERO) {
      clearInterval(timerID);

      showGameResult();
    }

    value.innerHTML = String(--counter);
  }, SECOND);
};

export default changeTimer;
