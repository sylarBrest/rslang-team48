/* eslint-disable no-useless-return */
import { getWordsDataByKeyboardClick } from '@handlers/gamesHandler/springGameHandlers/clickSprintButtonsHandler';
import clickSprintAgainHandler from '@handlers/gamesHandler/springGameHandlers/clickSprintAgainHandler';
import clickAudioResultHandler from '@handlers/gamesHandler/clickAudioResultHandler';
import renderGameResult from '@view/pages/Game/resultPage';
import { temporalWordsData, userDataLocal } from '@store';
import { clickTranslationByKeyboardHandler }
  from '@handlers/gamesHandler/audiocallGameHandlers/clickTranslationButtonsHandler';
import { updateWordsOnServer, updateGameStats } from '../statistics';

const showGameResult = async () => {
  const gameLayout = <HTMLElement>document.querySelector('.game__layout');

  gameLayout.innerHTML = renderGameResult();
  clickSprintAgainHandler();
  clickAudioResultHandler();

  if (userDataLocal) {
    updateWordsOnServer();
    await updateGameStats();
  }

  temporalWordsData.gameAnswers = [];

  window.removeEventListener('keydown', getWordsDataByKeyboardClick);
  window.removeEventListener('keydown', clickTranslationByKeyboardHandler);
};

export default showGameResult;
