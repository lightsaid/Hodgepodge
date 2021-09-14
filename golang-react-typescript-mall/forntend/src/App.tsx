import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom'
import { routes, IceRouteConfig } from './router/config'
import SwitchRoute from './components/switch-route/index'
function App() {
	return (
		<Router basename="/">
			<Switch>
				{routes.map((route, i) => (
					<SwitchRoute key={i} {...route} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
