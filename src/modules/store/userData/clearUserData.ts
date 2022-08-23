import { ELocalStorage } from '@constants';
import { initUserData } from './initUserData';

const clearUserData = () => {
  localStorage.removeItem(ELocalStorage.USER);

  initUserData();
};

export default clearUserData;
