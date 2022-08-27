import clickStartAudiocallHandler
  from '@modules/handlers/gamesHandler/audiocallGameHandlers/clickStartAudiocallHandler';
import clickLvlButtonHandler from '@modules/handlers/gamesHandler/clickLvlButtonHandler';

const startAudiocallGame = (flag: boolean) => {
  if (flag) clickLvlButtonHandler();
  clickStartAudiocallHandler(flag);
};

export default startAudiocallGame;
