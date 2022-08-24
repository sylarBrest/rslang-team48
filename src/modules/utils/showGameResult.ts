import { getWordsDataByKeyboardClick }
  from '@modules/handlers/gamesHandler/springGameHandlers/sprintButtonClickHandler';
import sprintPlayAgainHandler from '@modules/handlers/gamesHandler/springGameHandlers/sprintPlayAgainHandler';
import { temporalSprintWordsData } from '@modules/store/temporalData/temporalSprintWordsData';
import renderGameResult from '@modules/view/pages/Game/resultPage';

const showGameResult = () => {
  const gameLayout = <HTMLElement>document.querySelector('.game__layout');

  gameLayout.innerHTML = renderGameResult();
  sprintPlayAgainHandler();

  temporalSprintWordsData.gameAnswers = [];

  window.removeEventListener('keydown', getWordsDataByKeyboardClick);
};

export default showGameResult;
