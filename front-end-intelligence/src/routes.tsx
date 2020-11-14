import React from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import { isAuthenticated } from './helpers/auth';

import Home from './pages/Home';
import LoginPage from './pages/Login';

const routes = [
	{
		path: '/login',
		component: LoginPage,
		isPublic: true,
	},
	{
		path: '/',
		component: Home,
		isPublic: false,
	},
];

const PrivateRoute: React.FC<RouteProps> = ({
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					// @ts-ignore
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

const Routes: React.FC = () => (
	<Switch>
		{routes.map(({ path, component, isPublic }) =>
			isPublic ? (
				<Route key={path} path={path} component={component} exact />
			) : (
				<PrivateRoute key={path} path={path} component={component} exact />
			),
		)}
	</Switch>
);

export default Routes;
