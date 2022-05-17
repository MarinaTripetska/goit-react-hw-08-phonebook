const getIsLoggenIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingUser = state => state.auth.isFetchingUser;
const getMessage = state => state.auth.message;
const getIsError = state => state.auth.isError;
const getIsSuccess = state => state.auth.isSuccess;
const getIsLoading = state => state.auth.isLoading;

const gesIsErrorData = state => {
  const message = getMessage(state);
  const isError = getIsError(state);
  return [message, isError];
};

const getOperationStatus = state => {
  const isError = getIsError(state);
  const isSuccess = getIsSuccess(state);
  const isLoading = getIsLoading(state);

  return { isSuccess, isLoading, isError };
};

export const authSelectors = {
  getOperationStatus,
  getIsLoggenIn,
  getUserName,
  getIsSuccess,
  getIsLoading,
  getIsFetchingUser,
  getMessage,
  getIsError,
  gesIsErrorData,
};
