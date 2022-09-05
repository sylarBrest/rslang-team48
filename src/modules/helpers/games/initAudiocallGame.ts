import clickStartAudiocallHandler
  from '@handlers/gamesHandler/audiocallGameHandlers/clickStartAudiocallHandler';
import clickLvlButtonHandler from '@handlers/gamesHandler/clickLvlButtonHandler';

const startAudiocallGame = (flag: boolean) => {
  if (flag) clickLvlButtonHandler();
  clickStartAudiocallHandler(flag);
};

export default startAudiocallGame;
