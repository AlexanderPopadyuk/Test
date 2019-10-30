import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component, exact }, index) => (
        <Route
          key={index}
          path={path}
          component={component}
          exact={exact || false}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
