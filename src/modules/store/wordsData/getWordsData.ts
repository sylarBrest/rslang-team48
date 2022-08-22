import { WORDS_DATA } from '../../constants';

export const getWordsData = () => {
  const value: string | null = localStorage.getItem(WORDS_DATA);
  return value ? JSON.parse(value) : null;
};

export default getWordsData;
