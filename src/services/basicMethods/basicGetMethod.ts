import { HOST, URL_USERS, GET } from "../constants";
import { userDataLocal } from '../userData/initUserData';

export const basicGetMethod = async (url?: string) => {
  return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${url}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
