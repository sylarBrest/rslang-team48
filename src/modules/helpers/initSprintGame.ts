import clickLvlButtonHandler from '@modules/handlers/gamesHandler/clickLvlButtonHandler';
import clickStartSprintHandler from '@modules/handlers/gamesHandler/springGameHandlers/clickStartSprintHandler';

const startSprintGame = (flag: boolean) => {
  if (flag) clickLvlButtonHandler();
  clickStartSprintHandler(flag);
};

export default startSprintGame;
