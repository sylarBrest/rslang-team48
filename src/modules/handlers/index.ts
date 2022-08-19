import initHeaderHandlers from './headerHandlers';
import windowHandlers from './windowHandlers';

const initHandlers = () => {
  initHeaderHandlers();
  windowHandlers();
};

export default initHandlers;
