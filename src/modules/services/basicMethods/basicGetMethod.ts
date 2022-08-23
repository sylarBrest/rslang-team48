import { userDataLocal } from '@store/userData/initUserData';
import { HOST, EHttpMethod, EUrl } from '@constants';

const basicGetMethod = async (url?: string) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${url}`, {
    method: EHttpMethod.GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default basicGetMethod;
