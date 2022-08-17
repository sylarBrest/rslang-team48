import { HOST, POST, URL_USERS } from '../constants';

export const createUser = async (name: string, email: string, password: string) => {
  return await fetch(`${HOST}${URL_USERS}`, {
    method: POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
};
