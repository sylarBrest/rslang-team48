import { HOST, POST, URL_SIGNIN } from '../constants';

const signIn = async (email: string, password: string) =>
  fetch(`${HOST}${URL_SIGNIN}`, {
    method: POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

export default signIn;
