import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';

const createUserWord = async (wordId: string, difficulty: string, optional: Record<string, string>) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.WORDS}/${wordId}`, {
    method: EHttpMethod.POST,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      difficulty,
      optional,
    }),
  });

export default createUserWord;
