import { USER_DATA } from '../constants';

export const getLocalStorageData = () => {
  const value: string | null = localStorage.getItem(USER_DATA);
  return value ? JSON.parse(value) : null;
};
