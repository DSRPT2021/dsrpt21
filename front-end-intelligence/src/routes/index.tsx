import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import LoginPage from '../pages/Login';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/login" component={LoginPage} exact />
		<Route path="/" component={Home} exact isPrivate />
	</Switch>
);

export default Routes;
