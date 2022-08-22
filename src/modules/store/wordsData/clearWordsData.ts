import { WORDS_DATA } from '@constants';
import { initWordsData } from './initWordsData';

const clearWordsData = () => {
  localStorage.removeItem(WORDS_DATA);

  initWordsData();
};

export default clearWordsData;
