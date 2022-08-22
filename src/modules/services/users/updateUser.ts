import { HOST, PUT, URL_USERS } from '../constants';
import { userDataLocal } from '../userData/initUserData';

const updateUser = async (email: string, password: string) =>
  fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}`, {
    method: PUT,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

export default updateUser;
