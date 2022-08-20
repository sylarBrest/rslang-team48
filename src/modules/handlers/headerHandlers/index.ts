import loginHandler from './authorization/loginHandler';
import regHandler from './authorization/regHandler';
import closeModalHandler from './modal/closeModalHandler';
import escapeModalHandler from './modal/escapeModalHandler';
import openModalHandler from './modal/openModalHandler';
import dropdownHandler from './nav/dropdownHandler';
import navHandlers from './nav/navHandlers';

const initHeaderHandlers = () => {
  loginHandler();
  regHandler();
  closeModalHandler();
  openModalHandler();
  escapeModalHandler();
  navHandlers();
  dropdownHandler();
};

export default initHeaderHandlers;
