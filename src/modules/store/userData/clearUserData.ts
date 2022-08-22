import { USER_DATA } from '@constants';
import { initUserData } from './initUserData';

const clearUserData = () => {
  localStorage.removeItem(USER_DATA);

  initUserData();
};

export default clearUserData;
