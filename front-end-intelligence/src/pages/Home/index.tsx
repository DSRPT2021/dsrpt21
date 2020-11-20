import { shade } from 'polished';
import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { getTokenUserLogged } from '../../helpers/auth';
import api from '../../services/api';
import { theme } from '../../styles/theme';

import { Container, HospitalItem } from './styles';

interface IHospitalData {
	_id: string;
	name: string;
	distance: string;
	address: string;
	cep: string;
}

const Home: React.FC = () => {
	const [hospitals, setHospitals] = useState<IHospitalData[]>([]);

	const token = getTokenUserLogged();

	const getHospitals = async () => {
		const res = await api.get<IHospitalData[]>('/hospitals', {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		setHospitals(res.data);
	};

	useEffect(() => {
		getHospitals();
	}, []);

	return (
		<Container>
			<Header />
			<h1>Hospitais próximos</h1>

			{hospitals.map((hospital, i) => {
				return (
					// @ts-ignore
					<HospitalItem index={i * 0.15}>
						<p className="name">
							<b>Nome:</b>
							{` ${hospital.name}`}
						</p>
						<p className="distance">
							<b>Distância:</b>
							{` ${hospital.distance}`}
						</p>
						<p className="cep">
							<b>Endereço:</b>
							{` ${hospital.address}`}
						</p>
						<p className="cep">
							<b>CEP:</b>
							{` ${hospital.cep}`}
						</p>
					</HospitalItem>
				);
			})}
		</Container>
	);
};

export default Home;
