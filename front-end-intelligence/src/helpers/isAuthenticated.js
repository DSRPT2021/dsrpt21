export const isAuthenticated = () => getUserLogged() ? true : false;

const setUserLogged = (user) => {
	localStorage.setItem("@DSRPT21:user", JSON.stringify(user));
}

const getUserLogged = () => {
	return JSON.parse(localStorage.getItem("@DSRPT21:user"));
}
