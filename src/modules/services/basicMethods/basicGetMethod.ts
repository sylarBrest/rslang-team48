import { HOST, URL_USERS, GET } from '../constants';
import { userDataLocal } from '../userData/initUserData';

const basicGetMethod = async (url?: string) =>
  fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${url}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default basicGetMethod;
