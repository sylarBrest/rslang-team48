import { ELocalStorage } from '@constants';
import { TPageParameters } from '@types';

export const getWordsData = (): TPageParameters => {
  const value: string | null = localStorage.getItem(ELocalStorage.WORDS);
  return value ? JSON.parse(value) : null;
};

export default getWordsData;
