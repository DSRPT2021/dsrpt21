import React, { useState, useCallback } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { useAuth } from '../../hooks/AuthContext';

import { Container, ErrorMessage } from './styles';

const LoginPage: React.FC = () => {
	const { signIn, errorAuth } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(async () => {
		await signIn({ email, password });
	}, [signIn, email, password]);

	return (
		<Container>
			<Header />

			<form>
				<Input
					name="email"
					label="E-mail"
					placeholder="Digite seu endereço de e-mail"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					name="password"
					label="Senha"
					placeholder="Digite sua senha"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button onClick={handleSubmit}>Entrar</Button>
			</form>

			{errorAuth && <ErrorMessage>{errorAuth}</ErrorMessage>}
		</Container>
	);
};

export default LoginPage;
