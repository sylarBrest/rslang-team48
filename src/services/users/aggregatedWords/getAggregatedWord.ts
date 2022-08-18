// import { HOST, GET, URL_USERS, URL_AGGREGATED } from '../../constants';
// import { userDataLocal } from '../../userData/initUserData';

import { URL_AGGREGATED } from '../../constants';
import { basicGetMethodWithWordId } from '../../basicMethods/basicGetMethodWithWordId';

// export const getAggregatedWord = async (wordId: string) => {
//   return await fetch(`${HOST}${URL_USERS}/${userDataLocal.userId}${URL_AGGREGATED}/${wordId}`, {
//     method: GET,
//     headers: {
//       Authorization: `Bearer ${userDataLocal.token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
// };

export const getAggregatedWord = async (wordId: string) => {
  return await basicGetMethodWithWordId(wordId, URL_AGGREGATED);
};
