import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';
import { TOptionalStat } from 'modules/types/optional';

const updateUserStatistic = async (learnedWords: number, optional: TOptionalStat) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.STATISTICS}`, {
    method: EHttpMethod.PUT,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      learnedWords,
      optional,
    }),
  });

export default updateUserStatistic;
