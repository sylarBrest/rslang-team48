import { ELocalStorage } from '@constants';
import { initWordsData } from './initWordsData';

const clearWordsData = () => {
  localStorage.removeItem(ELocalStorage.WORDS);

  initWordsData();
};

export default clearWordsData;
