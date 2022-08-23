/* eslint-disable no-plusplus */
import { ANSWER_TIME, SECOND, ZERO } from '@modules/constants/common';

const changeTimer = () => {
  let counter = ANSWER_TIME;

  const value = <HTMLElement>document.querySelector('.game__sprint-timer');

  const timerID = setInterval(() => {
    if (value.textContent === ZERO) {
      clearInterval(timerID);

      // showGameResults();
    }

    value.innerHTML = String(--counter);
  }, SECOND);
};

export default changeTimer;
