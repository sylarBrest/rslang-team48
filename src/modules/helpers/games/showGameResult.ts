import { getWordsDataByKeyboardClick }
  from '@handlers/gamesHandler/springGameHandlers/clickSprintButtonsHandler';
import clickSprintAgainHandler from '@handlers/gamesHandler/springGameHandlers/clickSprintAgainHandler';
import clickAudioResultHandler from '@handlers/gamesHandler/clickAudioResultHandler';
import renderGameResult from '@view/pages/Game/resultPage';
import { temporalWordsData } from '@store';
import { clickTranslationByKeyboardHandler }
  from '@handlers/gamesHandler/audiocallGameHandlers/clickTranslationButtonsHandler';
import { TRUE } from '@constants';
import getMaxStreak from './getMaxStreak';

const showGameResult = () => {
  const gameLayout = <HTMLElement>document.querySelector('.game__layout');

  gameLayout.innerHTML = renderGameResult();
  clickSprintAgainHandler();
  clickAudioResultHandler();

  const streak = getMaxStreak(temporalWordsData.gameAnswers, TRUE);

  temporalWordsData.gameAnswers = [];

  window.removeEventListener('keydown', getWordsDataByKeyboardClick);
  window.addEventListener('keydown', clickTranslationByKeyboardHandler);
};

export default showGameResult;
