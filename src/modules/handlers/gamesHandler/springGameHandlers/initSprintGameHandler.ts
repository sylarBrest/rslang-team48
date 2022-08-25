import clickLvlButtonHandler from '../clickLvlButtonHandler';
import clickStartSprintHandler from './clickStartSprintHandler';

const startSprintGameHandler = (flag: boolean) => {
  if (flag) clickLvlButtonHandler();
  clickStartSprintHandler(flag);
};

export default startSprintGameHandler;
