// import { HOST, GET, URL_USERS, URL_SETTINGS } from '../../constants';
import { URL_SETTINGS } from '../../constants';
import { basicGetMethod } from '../../basicMethods/basicGetMethod';
// import { userDataLocal } from '../../userData/initUserData';

// export const getUserSettings = async () => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_SETTINGS}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getUserStatistic = async () => {
  return await basicGetMethod(URL_SETTINGS);
};
