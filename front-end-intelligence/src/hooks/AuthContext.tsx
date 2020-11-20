import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';
import {
	getTokenUserLogged,
	getUserLogged,
	logoutUser,
	setUserLogged,
	User,
} from '../helpers/auth';

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthState {
	user: User;
	token: string;
}

interface IAuthContext {
	user: object;
	signIn(credentials: SignInCredentials): Promise<void>;
	signOut(): void;
	errorAuth: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const user = getUserLogged();
		const token = getTokenUserLogged();

		if (token && user) {
			return { token, user: JSON.parse(user) };
		}

		return {} as AuthState;
	});
	const [errorAuth, setErrorAuth] = useState('');

	const signIn = useCallback(async ({ email, password }) => {
		try {
			const res = await api.post('/session', {
				email,
				password,
			});

			const { user, token } = res.data;

			setUserLogged(user, token);

			setData({ user, token });
		} catch (err) {
			setErrorAuth(err.response.data.message);
		}
	}, []);

	const signOut = useCallback(() => {
		logoutUser();

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider
			value={{ user: data.user, signIn, signOut, errorAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth(): IAuthContext {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuth must be used within an AuthProvider');

	return context;
}
