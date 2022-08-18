import { USER_DATA } from "../constants";
import { initUserData } from "./initUserData";

export const clearLocalStorageData = () => {
  localStorage.removeItem(USER_DATA);

  initUserData();
};
