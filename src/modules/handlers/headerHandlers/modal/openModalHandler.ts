import { ZERO } from '@constants';
import { clearUserData, updateWordsData, userDataLocal } from '@store';

const userLogout = () => {
  clearUserData();
  updateWordsData(ZERO, ZERO);
  window.location.replace('/#/home');
  window.location.reload();
};

const userLogin = () => {
  const modal = <HTMLElement>document.querySelector('.modal');
  modal.classList.add('modal-show');
};

const openModalHandler = () => {
  const openModalBtn = <HTMLButtonElement>document.querySelector('.menu__login-btn');

  openModalBtn.addEventListener('click', userDataLocal ? userLogout : userLogin);
};

export default openModalHandler;
