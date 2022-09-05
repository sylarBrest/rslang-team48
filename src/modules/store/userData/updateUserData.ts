import { ELocalStorage } from '@constants';

const updateUserData = async (name: string, userId: string, token: string, refreshToken: string) => {
  const value = JSON.stringify({
    name,
    userId,
    token,
    refreshToken,
  });
  localStorage.setItem(ELocalStorage.USER, value);
};

export default updateUserData;
