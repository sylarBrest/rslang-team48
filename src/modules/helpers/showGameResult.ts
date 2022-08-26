import { getWordsDataByKeyboardClick }
  from '@modules/handlers/gamesHandler/springGameHandlers/clickSprintButtonsHandler';
import clickSprintAgainHandler from '@modules/handlers/gamesHandler/springGameHandlers/clickSprintAgainHandler';
import clickAudioResultHandler from '@modules/handlers/gamesHandler/clickAudioResultHandler';
import renderGameResult from '@view/pages/Game/resultPage';
import { temporalWordsData } from '@modules/store/temporalData/temporalWordsData';

const showGameResult = () => {
  const gameLayout = <HTMLElement>document.querySelector('.game__layout');

  gameLayout.innerHTML = renderGameResult();
  clickSprintAgainHandler();
  clickAudioResultHandler();

  temporalWordsData.gameAnswers = [];

  window.removeEventListener('keydown', getWordsDataByKeyboardClick);
};

export default showGameResult;
