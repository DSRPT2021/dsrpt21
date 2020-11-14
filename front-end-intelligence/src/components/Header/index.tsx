import React, { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { isAuthenticated, logoutUser } from '../../helpers/auth';

import Logo from '../../assets/images/Logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
	const history = useHistory();

	const handleLogout = (): void => {
		logoutUser();
		history.push('/login');
	};

	return (
		<Container>
			<a href="/" className="logo">
				<img src={Logo} alt="Logo Medness" />
				<h1>Medness</h1>
			</a>

			<nav>
				{isAuthenticated() && (
					<button type="button" onClick={handleLogout}>
						<FiLogOut size={22} />
					</button>
				)}
			</nav>
		</Container>
	);
};

export default Header;
