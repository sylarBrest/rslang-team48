import { ELocalStorage } from '@constants';

const clearUserData = () => {
  localStorage.removeItem(ELocalStorage.USER);
};

export default clearUserData;
