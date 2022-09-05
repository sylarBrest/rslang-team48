import { userDataLocal } from '@store';
import { HOST, EHttpMethod, EUrl } from '@constants';

const deleteUser = async () =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}`, {
    method: EHttpMethod.DELETE,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default deleteUser;
