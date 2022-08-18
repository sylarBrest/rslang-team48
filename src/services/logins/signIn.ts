import { HOST, POST, URL_SIGNIN } from '../constants';

export const signIn = async (email: string, password: string) => {
  return await fetch(`${HOST}${URL_SIGNIN}`, {
    method: POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
