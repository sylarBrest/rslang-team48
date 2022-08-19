import { HOST, URL_USERS, GET } from '../constants';
import { userDataLocal } from '../userData/initUserData';

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