import { ZERO } from '@constants';
import { wordsDataLocal } from '@store';

export default () => {
  if (+wordsDataLocal.page < 0) {
    wordsDataLocal.page = ZERO;
  }

  if (+wordsDataLocal.page > 29) {
    wordsDataLocal.page = '29';
  }
};
