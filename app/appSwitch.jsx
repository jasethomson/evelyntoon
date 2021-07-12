import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Routes, PostRoutes, NoNavRoutes } from './utils/routes';

const AppSwitch = props => {
  const postRoutes = PostRoutes();
  const routes = Routes();
  const noNavRoutes = NoNavRoutes();
  return (
    <Switch>
      {noNavRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
      {postRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
      {routes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
    </Switch>
  );
}

export default withRouter(AppSwitch);
