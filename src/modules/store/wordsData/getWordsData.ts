import { ELocalStorage } from '@constants';

export const getWordsData = () => {
  const value: string | null = localStorage.getItem(ELocalStorage.WORDS);
  return value ? JSON.parse(value) : null;
};

export default getWordsData;
