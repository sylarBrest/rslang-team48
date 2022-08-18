// import { HOST, GET, URL_USERS, URL_WORDS } from '../../constants';
// import { userDataLocal } from '../../userData/initUserData';

import { URL_WORDS } from '../../constants';
import { basicGetMethodWithWordId } from '../../basicMethods/basicGetMethodWithWordId';

// export const getUserWord = async (wordId: string) => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_WORDS}/${wordId}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getUserWord = async (wordId: string) => {
  return await basicGetMethodWithWordId(wordId, URL_WORDS);
};
