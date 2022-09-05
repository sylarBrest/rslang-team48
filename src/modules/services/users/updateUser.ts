import { userDataLocal } from '@store';
import { HOST, EHttpMethod, EUrl } from '@constants';

const updateUser = async (email: string, password: string) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}`, {
    method: EHttpMethod.PUT,
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
