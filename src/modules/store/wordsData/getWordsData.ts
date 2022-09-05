import { ELocalStorage } from '@constants';
import { TPageParameters } from '@types';
import { userDataLocal } from '../userData';
import setWordsData from './setWordsData';

export const getWordsData = async (): Promise<TPageParameters> => {
  if (userDataLocal) {
    await setWordsData();
  }

  const value: string | null = localStorage.getItem(ELocalStorage.WORDS);
  return value ? JSON.parse(value) : null;
};

export default getWordsData;
