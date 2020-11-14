import { styled } from '../../styles/theme';

export const Container = styled.div`
	span {
		display: block;
		font-weight: bold;
		margin: 0 0 10px;
	}

	label {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0 20px;
		border-radius: ${p => p.theme.radius};
		border: 2px solid ${p => p.theme.colors.blue[400]};

		input {
			flex: 1;
			font-size: 16px;
			padding: 14px 0;
		}

		svg {
			stroke: ${p => p.theme.colors.blue[400]};
			padding: 12px 0 12px 20px;
			box-sizing: unset;
			cursor: pointer;
		}
	}

	& + div {
		margin-top: 20px;
	}
`;
