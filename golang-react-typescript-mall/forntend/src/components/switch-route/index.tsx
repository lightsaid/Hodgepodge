import React, { FC, ReactElement } from "react"

import { Route } from "react-router-dom"
import { IceRouteConfig } from "../../router/config"

interface SwitchRouteProps extends IceRouteConfig {
}

const SwitchRoute: FC<SwitchRouteProps> = (route: any): ReactElement => {
	console.log(route)
	return (
		<div>
			<Route
				path={route.path}
				render={(props) => <route.component {...props} routes={route.routes} />}
			/>
		</div>
	)
}

export default SwitchRoute
