import { getUserData } from './getUserData';

export const userDataLocal: Record<string, string | null> = {
  name: null,
  userId: null,
  token: null,
  refreshToken: null,
};

export const initUserData = () => {
  const {
    name, userId, token, refreshToken,
  } = getUserData();

  userDataLocal.name = name || null;
  userDataLocal.userId = userId || null;
  userDataLocal.token = token || null;
  userDataLocal.refreshToken = refreshToken || null;
};
