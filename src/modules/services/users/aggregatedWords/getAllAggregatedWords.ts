import {
  HOST, EUrl, EHttpMethod, WORDS_PER_PAGE, DEFAULT_FILTER,
} from '@constants';
import { userDataLocal, wordsDataLocal } from '@store';

const getAllAggregatedWords = async (
  group = wordsDataLocal.group,
  page = wordsDataLocal.page,
  wordsPerPage = WORDS_PER_PAGE,
  filter = DEFAULT_FILTER,
) => {
  const searchParams = new URLSearchParams({
    group,
    page,
    wordsPerPage,
    filter,
  });

  return fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.AGGREGATED}?${searchParams}`, {
    method: EHttpMethod.GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default getAllAggregatedWords;
