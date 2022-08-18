import { HOST, PUT, URL_USERS } from '../constants';
import { userDataLocal } from '../userData/initUserData';

export const updateUser = async (email: string, password: string) => {
  return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}`, {
    method: PUT,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
