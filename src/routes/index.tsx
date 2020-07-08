import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Room from '../pages/Room';

import { SignUpProvider } from '../context/SignUpContext';
import { SignInProvider } from '../context/SignInContext';

const Routes: React.FC = () => (
  <Switch>
    <SignInProvider>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/room" component={Room} />
    </SignInProvider>
  </Switch>
);

export default Routes;
