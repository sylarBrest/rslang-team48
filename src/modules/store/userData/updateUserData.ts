import { ELocalStorage } from '@constants';
import { initUserData } from './initUserData';

const updateUserData = (name: string, userId: string, token: string, refreshToken: string) => {
  const value = JSON.stringify({
    name,
    userId,
    token,
    refreshToken,
  });
  localStorage.setItem(ELocalStorage.USER, value);

  initUserData();
};

export default updateUserData;
