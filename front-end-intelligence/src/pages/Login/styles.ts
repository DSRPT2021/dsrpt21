import { styled } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	form {
		width: 90%;
		max-width: 900px;
		margin-top: 50px;
	}
`;

export const ErrorMessage = styled.p`
	width: 90%;
	max-width: 900px;
	margin: 30px auto 0;
	color: #c00;
`;
