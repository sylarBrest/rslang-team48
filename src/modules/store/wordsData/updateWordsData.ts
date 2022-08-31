import { ELocalStorage } from '@constants';

const updateWordsData = (group: string, page: string) => {
  const value = JSON.stringify({
    group,
    page,
  });
  localStorage.setItem(ELocalStorage.WORDS, value);
};

export default updateWordsData;
