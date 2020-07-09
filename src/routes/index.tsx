import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Room from '../pages/Room';

import GlobalDiv from '../components/GlobalDiv';
import { SignUpProvider } from '../context/SignUpContext';
import { SignInProvider } from '../context/SignInContext';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <GlobalDiv>
      <SignInProvider>
        <Route exact path="/" component={SignIn} />
      </SignInProvider>
      <SignUpProvider>
        <Route exact path="/signup" component={SignUp} />
      </SignUpProvider>
      <Route exact path="/room" component={Room} requiresAuth />
    </GlobalDiv>
  </Switch>
);

export default Routes;
