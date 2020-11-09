import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {isAuthenticated} from './helpers/isAuthenticated';

const routes = [
	{
		path: "/",
		component: () => <h1>Home</h1>,
		isPublic: true,
	},
	{
		path: "/contact",
		component: () => <h1>Contact</h1>,
		isPublic: false,
	},
]

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{pathname: "/", state: {from : props.location}}} />
			)
		}
	/>
);

const Routes = () => {
	return (
		<Router>
			<Switch>
				{routes.map(({ path, component, isPublic }) => (
					isPublic ? (
						<Route path={path} component={component} exact />
					) : (
						<PrivateRoute path={path} component={component} exact />
					)
				))}
			</Switch>
		</Router>
	);
};

export default Routes;
