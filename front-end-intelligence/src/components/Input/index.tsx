import React, { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

const Input: React.FC<InputProps> = props => {
	const [hidePassword, setHidePassword] = useState(true);

	return (
		<Container>
			<span>{props.label}</span>
			<label>
				{props.type === 'password' ? (
					<>
						<input {...props} type={hidePassword ? 'password' : 'text'} />
						{hidePassword ? (
							<FiEyeOff
								size={20}
								onClick={() => setHidePassword(!hidePassword)}
							/>
						) : (
							<FiEye size={20} onClick={() => setHidePassword(!hidePassword)} />
						)}
					</>
				) : (
					<input {...props} />
				)}
			</label>
		</Container>
	);
};

export default Input;
