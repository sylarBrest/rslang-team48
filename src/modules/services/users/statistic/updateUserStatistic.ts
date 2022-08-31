import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';

const updateUserStatistic = async (learnedWords: number, optional: Record<string, string>) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}`, {
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
