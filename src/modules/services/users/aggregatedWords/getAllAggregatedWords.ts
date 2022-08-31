import {
  HOST, EUrl, EHttpMethod, WORDS_PER_PAGE,
} from '@constants';
import { userDataLocal, wordsDataLocal } from '@store';

const getAllAggregatedWords = async (
  filter: string,
  group: string = wordsDataLocal.group,
  page: string = wordsDataLocal.page,
  wordsPerPage: string = WORDS_PER_PAGE,
) => {
  const searchParams = new URLSearchParams({
    group,
    page,
    wordsPerPage,
    filter,
  });
  return fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}/${EUrl.AGGREGATED}?${searchParams}`, {
    method: EHttpMethod.GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default getAllAggregatedWords;
