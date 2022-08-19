import { HOST, POST, URL_USERS } from '../constants';

const createUser = async (name: string, email: string, password: string) =>
  fetch(`${HOST}${URL_USERS}`, {
    method: POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

export default createUser;
