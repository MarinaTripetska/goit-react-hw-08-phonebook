const getIsLoggenIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingUser = state => state.auth.isFetchingUser;

export const authSelectors = {
  getIsLoggenIn,
  getUserName,
  getIsFetchingUser,
};
