import { userDataLocal } from '@store/userData/initUserData';
import { HOST, DELETE, URL_USERS } from '../constants';

const deleteUser = async () =>
  fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default deleteUser;
