import { HOST, EHttpMethod, EUrl } from '@constants';

const createUser = async (name: string, email: string, password: string) =>
  fetch(`${HOST}${EUrl.USERS}`, {
    method: EHttpMethod.POST,
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
