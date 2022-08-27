import clickLvlButtonHandler from '@handlers/gamesHandler/clickLvlButtonHandler';
import clickStartSprintHandler from '@handlers/gamesHandler/springGameHandlers/clickStartSprintHandler';

const startSprintGame = (flag: boolean) => {
  if (flag) clickLvlButtonHandler();
  clickStartSprintHandler(flag);
};

export default startSprintGame;
