import { FC } from 'react'
import { RouteProps } from 'react-router-dom'
import Home from '../views/home'
import Login from '../views/login'
import ShoppingCart from '../views/shopping-cart'

export interface IceRouteConfig extends RouteProps{
    routes?: IceRouteConfig[]
}

export const routes: IceRouteConfig[] = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: "/home/login",
                component: Login
              },
              {
                path: "/home/shoppingcart",
                component: ShoppingCart
              }
        ]
    }
]
