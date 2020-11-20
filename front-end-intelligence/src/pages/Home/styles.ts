import { shade } from 'polished';
import { styled } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HospitalItem = styled.div<{ index: string }>`
	background: ${p => shade(p.index, p.theme.colors.blue[300])};
	width: 90%;
	max-width: 900px;
	padding: 30px 50px;
	margin: 30px auto 0;
	border-radius: 15px;

	p {
		color: #fff;
	}

	p + p {
		margin: 10px 0 0;
	}
`;
