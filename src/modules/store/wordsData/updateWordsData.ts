import { ELocalStorage } from '@constants';
import { initWordsData } from './initWordsData';

const updateWordsData = (group: string, page: string) => {
  const value = JSON.stringify({
    group,
    page,
  });
  localStorage.setItem(ELocalStorage.WORDS, value);

  initWordsData();
};

export default updateWordsData;
