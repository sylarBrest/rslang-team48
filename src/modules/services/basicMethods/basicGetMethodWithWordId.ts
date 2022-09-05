import { userDataLocal } from '@store';
import { HOST, EHttpMethod, EUrl } from '@constants';

const basicGetMethodWithWordId = async (wordId: string, url: string) =>
  fetch(`${HOST}${EUrl.USERS}/${userDataLocal.userId}${url}/${wordId}`, {
    method: EHttpMethod.GET,
    headers: {
      Authorization: `Bearer ${userDataLocal.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export default basicGetMethodWithWordId;
