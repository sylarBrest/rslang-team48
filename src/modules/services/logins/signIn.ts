import { HOST, EHttpMethod, EUrl } from '@constants';

const signIn = async (email: string, password: string) =>
  fetch(`${HOST}${EUrl.SIGNIN}`, {
    method: EHttpMethod.POST,
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
