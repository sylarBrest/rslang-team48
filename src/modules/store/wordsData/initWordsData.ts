import { ZERO } from '@constants';
import { getWordsData } from './getWordsData';

const wordsDataLocal = await getWordsData() || {
  group: ZERO,
  page: ZERO,
};

export default wordsDataLocal;
