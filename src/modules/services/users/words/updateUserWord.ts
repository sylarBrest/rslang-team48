import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';
import { TDifficulty, TOptionalWord } from '@types';

const updateUserWord = async (wordId: string, difficulty: TDifficulty, optional: TOptionalWord) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.WORDS}/${wordId}`, {
    method: EHttpMethod.PUT,
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

export default updateUserWord;
