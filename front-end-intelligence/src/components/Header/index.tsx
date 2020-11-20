import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { isAuthenticated } from '../../helpers/auth';

import Logo from '../../assets/images/Logo.png';

import { Container } from './styles';
import { useAuth } from '../../hooks/AuthContext';

const Header: React.FC = () => {
	const { signOut } = useAuth();

	const handleLogout = (): void => {
		signOut();
	};

	return (
		<Container>
			<a href="/" className="logo" title="Logo Medness">
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
