import { USER_DATA } from '../constants';
import { initUserData } from './initUserData';

const clearLocalStorageData = () => {
  localStorage.removeItem(USER_DATA);

  initUserData();
};

export default clearLocalStorageData;
