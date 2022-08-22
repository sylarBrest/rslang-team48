import {
  DELETE, HOST, URL_USERS, URL_WORDS,
} from '@services/constants';
import { userDataLocal } from '@store/userData/initUserData';

const deleteUserWord = async (wordId: string) =>
  fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_WORDS}/${wordId}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default deleteUserWord;
