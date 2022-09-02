import { ELocalStorage } from '@constants';

const clearWordsData = () => {
  localStorage.removeItem(ELocalStorage.WORDS);
};

export default clearWordsData;
