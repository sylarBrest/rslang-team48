// import { HOST, GET, URL_USERS, URL_WORDS } from '../../constants';
// import { userDataLocal } from '../../userData/initUserData';

import { URL_WORDS } from '../../constants';
import { basicGetMethod } from '../../basicMethods/basicGetMethod';

// export const getAllUserWords = async () => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_WORDS}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getAllUserWords = async () => {
  return await basicGetMethod(URL_WORDS);
};
