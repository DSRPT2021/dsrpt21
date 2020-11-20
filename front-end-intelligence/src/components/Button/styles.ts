import { shade } from 'polished';

import { styled } from '../../styles/theme';

export const Container = styled.button`
	background: ${p => p.theme.colors.blue[400]};
	font-size: 18px;
	color: #fff;
	font-weight: bold;
	padding: 15px 50px;
	margin: 20px 0 20px auto;
	border-radius: ${p => p.theme.radius};
	transition: 0.2s ease-in-out;

	&:hover {
		background: ${p => shade(0.2, p.theme.colors.blue[400])};
	}
`;
