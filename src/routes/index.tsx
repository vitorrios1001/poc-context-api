import React, { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Posts from '../screens/Posts/pages'
import PostsDetails from '../screens/Posts/pages/details'
import Home from '../screens/Home/pages'
import NotFound from '../screens/NotFound/pages'

export interface IRoute {
  key: string
  path: string
  component: FunctionComponent
  isMenu?: boolean
}

export const ROUTES: IRoute[] = [
  { key: 'Home', path: '/', component: Home, isMenu: true },
  { key: 'Posts', path: '/posts', component: Posts, isMenu: true },
  { key: 'Posts', path: '/posts/:id', component: PostsDetails },
  { key: 'NotFound', path: '*', component: NotFound },
]

const Routes = () => {
  const renderRoutes = (
    ROUTES.map((route) => (
      <Route
        exact
        key={route.key}
        component={route.component}
        path={route.path}
      />
    ))
  )

  return (
    <BrowserRouter>
    <Header />
      <Switch>
        {renderRoutes}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes