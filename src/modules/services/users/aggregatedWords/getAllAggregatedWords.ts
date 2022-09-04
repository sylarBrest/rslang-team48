import {
  HOST, EUrl, EHttpMethod, DEFAULT_FILTER,
} from '@constants';
import { userDataLocal } from '@store';

const getAllAggregatedWords = async (wordsPerPage: string, filter = DEFAULT_FILTER) => {
  const searchParams = new URLSearchParams({
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
