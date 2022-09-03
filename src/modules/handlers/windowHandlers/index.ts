import mainPageScrollHandler from './mainPageScrollHandler';
import menuRepaintingHandler from './menuRepaintingHandler';
import textbookHeaderHandler from './textbookHeaderHandler';

const initWindowHandlers = () => {
  textbookHeaderHandler();
  menuRepaintingHandler();
  mainPageScrollHandler();
};

export default initWindowHandlers;
