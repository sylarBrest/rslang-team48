import initHeaderHandlers from './headerHandlers';
import initRouterHandlers from './routerHandlers';
import initWindowHandlers from './windowHandlers';

const initHandlers = () => {
  initHeaderHandlers();
  initRouterHandlers();
  initWindowHandlers();
};

export default initHandlers;
