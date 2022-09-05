import { ELocalStorage } from '@constants';
import { TUserLocalData } from '@types';

const getUserData = (): TUserLocalData => {
  const value: string | null = localStorage.getItem(ELocalStorage.USER);
  return value ? JSON.parse(value) : null;
};

export default getUserData;
