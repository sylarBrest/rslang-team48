import { ZERO } from '@constants';
import { getWordsData } from './getWordsData';

const wordsDataLocal = getWordsData() || {
  group: ZERO,
  page: ZERO,
};

export default wordsDataLocal;
