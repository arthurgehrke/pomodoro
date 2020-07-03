import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
