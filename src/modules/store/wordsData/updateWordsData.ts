import { WORDS_DATA } from '@constants';
import { initWordsData } from './initWordsData';

const updateWordsData = (group: string, page: string) => {
  const value = JSON.stringify({
    group,
    page,
  });
  localStorage.setItem(WORDS_DATA, value);

  initWordsData();
};

export default updateWordsData;
