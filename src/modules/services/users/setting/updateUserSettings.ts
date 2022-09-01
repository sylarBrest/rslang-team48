import { HOST, EUrl, EHttpMethod } from '@constants';
import { userDataLocal } from '@store';

const updateUserSettings = async (wordsPerDay: number, optional: Record<string, string>) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${EUrl.SETTINGS}`, {
    method: EHttpMethod.PUT,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wordsPerDay,
      optional,
    }),
  });

export default updateUserSettings;
