import { HOST, EHttpMethod, EUrl } from '@constants';
import { userDataLocal } from '@store';

const deleteUserWord = async (wordId: string) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.WORDS}/${wordId}`, {
    method: EHttpMethod.DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default deleteUserWord;
