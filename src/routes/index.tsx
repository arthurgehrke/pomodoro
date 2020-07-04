import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Room from '../pages/Room';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/room" component={Room} />
  </Switch>
);

export default Routes;
