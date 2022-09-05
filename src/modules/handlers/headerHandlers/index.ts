import loginHandler from './authorization/loginHandler';
import regHandler from './authorization/regHandler';
import closeModalHandler from './modal/closeModalHandler';
import escapeModalHandler from './modal/escapeModalHandler';
import openModalHandler from './modal/openModalHandler';
import navHandlers from './nav/navHandlers';
import changeTabHandler from './modal/changeTabHandler';

const initHeaderHandlers = () => {
  loginHandler();
  regHandler();
  closeModalHandler();
  openModalHandler();
  escapeModalHandler();
  navHandlers();
  changeTabHandler();
};

export default initHeaderHandlers;
