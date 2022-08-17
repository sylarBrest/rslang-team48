import { DELETE, HOST, URL_USERS, URL_WORDS } from '../../constants';
import { userDataLocal } from '../../userData/initUserData';

export const deleteUserWord = async (wordId: string) => {
  return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_WORDS}/${wordId}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
