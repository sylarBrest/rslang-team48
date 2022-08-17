import { HOST, DELETE, URL_USERS } from '../constants';
import { userDataLocal } from '../userData/initUserData';

export const deleteUser = async () => {
  return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
