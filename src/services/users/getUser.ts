// import { HOST, GET, URL_USERS } from '../constants';
import { basicGetMethod } from '../basicMethods/basicGetMethod';
// import { userDataLocal } from '../userData/initUserData';

// export const getUser = async () => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getUser = async () => {
  return await basicGetMethod();
};
