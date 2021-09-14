import { FC, useState, useEffect } from "react"
import SwitchRoute from "../../components/switch-route"
import { Switch } from 'react-router-dom'
import { IceRouteConfig } from "../../router/config"
interface HomeProps extends IceRouteConfig{ }
const Home: FC<HomeProps> = (props) => {
    const { routes } = props
    return (
        <>
            <div className="home">Home page</div>
            <Switch>
                {/* {routes?.map((route: HomeProps , i: number) => (
                    <SwitchRoute key={i} {...route} />
                ))} */}
            </Switch>
        </>
    )
}

export default Home

