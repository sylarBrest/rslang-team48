import { USER_DATA } from '../constants';
import { initUserData } from './initUserData';

const updateLocalStorageData = (name: string, userId: string, token: string, refreshToken: string) => {
  const value = JSON.stringify({
    name,
    userId,
    token,
    refreshToken,
  });
  localStorage.setItem(USER_DATA, value);

  initUserData();
};

export default updateLocalStorageData;
