interface User {
	id: string;
	email: string;
	password: string;
}

export const setUserLogged = (user: User): void => {
	localStorage.setItem('@DSRPT21:user', JSON.stringify(user));
};

export const getUserLogged = (): string => {
	return localStorage.getItem('@DSRPT21:user') || '';
};

export const logoutUser = (): void => {
	localStorage.removeItem('@DSRPT21:user');
};

export const isAuthenticated = (): boolean => !!getUserLogged();
