import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import { isAuthenticated, setUserLogged } from '../../helpers/auth';
import Header from '../../components/Header';

const LoginPage: React.FC = () => {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (isAuthenticated()) {
			history.push('/');
		}
	});

	const handleSubmit = (): void => {
		setUserLogged({ id: '123', email, password });
		history.push('/');
	};

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
		</Container>
	);
};

export default LoginPage;
