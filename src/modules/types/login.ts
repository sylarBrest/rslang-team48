export type TUserLocalData = {
  name: string;
  token: string;
  refreshToken: string;
  userId: string;
};

export type TLoginData = TUserLocalData & {
  message: string;
};
