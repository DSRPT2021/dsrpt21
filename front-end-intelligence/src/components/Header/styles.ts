import { shade } from 'polished';
import { styled } from '../../styles/theme';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 5%;

	.logo {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		h1 {
			color: ${p => p.theme.colors.blue[400]};
			margin: 0 0 0 20px;
		}
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		button {
			padding: 10px;

			svg {
				stroke: ${p => p.theme.colors.blue[300]};
				transition: 0.2s;
			}

			&:hover {
				svg {
					stroke: ${p => shade(0.2, p.theme.colors.blue[300])};
					transform: scale(1.2, 1.2);
				}
			}
		}
	}
`;
