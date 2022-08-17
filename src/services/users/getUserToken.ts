// import { HOST, GET, URL_USERS, URL_TOKENS } from '../constants';
import { URL_TOKENS } from '../constants';
import { basicGetMethod } from '../basicMethods/basicGetMethod';
// import { userDataLocal } from '../userData/initUserData';

// export const getNewUserToken = async () => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_TOKENS}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getNewUserToken = async () => {
  return await basicGetMethod(URL_TOKENS);
};
