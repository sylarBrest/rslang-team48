import { USER_DATA, } from '../constants';
import { initUserData } from './initUserData';

export const updateLocalStorageData = (name: string, userId: string, token: string, refreshToken: string) => {
  const value = JSON.stringify({
    name: name,
    userId: userId,
    token: token,
    refreshToken: refreshToken,
  });
  localStorage.setItem(USER_DATA, value)

  initUserData();
};
