import menuRepaintingHandler from './menuRepaintingHandler';
import textbookHeaderHandler from './textbookHeaderHandler';

const initWindowHandlers = () => {
  textbookHeaderHandler();
  menuRepaintingHandler();
};

export default initWindowHandlers;
