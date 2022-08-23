import { ZERO } from '@constants';
import { getWordsData } from './getWordsData';

export const wordsDataLocal: Record<string, string> = {
  group: ZERO,
  page: ZERO,
};

export const initWordsData = () => {
  const { group, page } = getWordsData();

  wordsDataLocal.group = group || ZERO;
  wordsDataLocal.page = page || ZERO;
};
