import { ELocalStorage } from '@constants';

export const getUserData = () => {
  const value: string | null = localStorage.getItem(ELocalStorage.USER);
  return value ? JSON.parse(value) : null;
};

export default getUserData;
