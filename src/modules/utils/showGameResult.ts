import { getWordsDataByKeyboardClick }
  from '@handlers/gamesHandler/springGameHandlers/sprintButtonClickHandler';
import sprintPlayAgainHandler from '@handlers/gamesHandler/springGameHandlers/sprintPlayAgainHandler';
import { temporalSprintWordsData } from '@store/temporalData/temporalSprintWordsData';
import renderGameResult from '@view/pages/Game/resultPage';

const showGameResult = () => {
  const gameLayout = <HTMLElement>document.querySelector('.game__layout');

  gameLayout.innerHTML = renderGameResult();
  sprintPlayAgainHandler();

  temporalSprintWordsData.gameAnswers = [];

  window.removeEventListener('keydown', getWordsDataByKeyboardClick);
};

export default showGameResult;
