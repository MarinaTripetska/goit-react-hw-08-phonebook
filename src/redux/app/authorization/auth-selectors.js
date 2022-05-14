const getIsLoggenIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

export const authSelectors = {
  getIsLoggenIn,
  getUserName,
};
