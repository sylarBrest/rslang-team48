import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';

const getAllAggregatedWords = async (group = '', page = '', wordsPerPage = '', filter = '') => {
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
