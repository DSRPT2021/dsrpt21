export interface User {
	_id: string;
	name: string;
	email: string;
}

export const setUserLogged = (user: User, token: string): void => {
	localStorage.setItem('@DSRPT21:user', JSON.stringify(user));
	localStorage.setItem('@DSRPT21:token', token);
};

export const getTokenUserLogged = (): string => {
	return localStorage.getItem('@DSRPT21:token') as string;
};

export const getUserLogged = (): string => {
	return localStorage.getItem('@DSRPT21:user') as string;
};

export const logoutUser = (): void => {
	localStorage.removeItem('@DSRPT21:user');
	localStorage.removeItem('@DSRPT21:token');
};

export const isAuthenticated = (): boolean => !!getUserLogged();
