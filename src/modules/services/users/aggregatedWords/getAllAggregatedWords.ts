import {
  HOST, EUrl, EHttpMethod,
} from '@constants';
import { userDataLocal } from '@store';
import { TQueriesAggregated } from '@types';

const getAllAggregatedWords = async (queries: TQueriesAggregated, isAll = false) => {
  const searchParams = isAll
    ? new URLSearchParams({
      wordsPerPage: queries.wordsPerPage,
      filter: queries.filter,
    })
    : new URLSearchParams({
      group: queries.group,
      page: queries.page,
      wordsPerPage: queries.wordsPerPage,
      filter: queries.filter,
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
