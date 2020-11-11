import React from 'react';

import { styled } from '../styles/theme';

const Title = styled.h1`
  font-size: 50px;
  color: ${p => p.theme.colors.blue[300]};
`;

const Home = () => <Title>Home</Title>;

export default Home;
