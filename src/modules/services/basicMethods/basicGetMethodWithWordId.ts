import { userDataLocal } from '@store/userData/initUserData';
import { HOST, URL_USERS, GET } from '../constants';

const basicGetMethodWithWordId = async (wordId: string, url: string) =>
  fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${url}/${wordId}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default basicGetMethodWithWordId;
