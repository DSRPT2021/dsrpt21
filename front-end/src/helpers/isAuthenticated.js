export const setUserLogged = user => {
  localStorage.setItem('@DSRPT21:user', JSON.stringify(user));
};

export const getUserLogged = () => {
  return JSON.parse(localStorage.getItem('@DSRPT21:user'));
};

export const isAuthenticated = () => !!getUserLogged();
