import { getAccessToken } from "./StorageUtils";

export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return accessToken !== undefined && accessToken !== "";
};
