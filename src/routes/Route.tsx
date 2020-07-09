/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  RouteProps as ReactRouterDomProps,
  Route as ReactRouterDomRoute,
  Redirect,
} from 'react-router-dom';

import { useSignIn } from '../context/SignInContext';

interface RouteProps extends ReactRouterDomProps {
  isNotFound?: boolean;
  requiresAuth?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isNotFound = false,
  requiresAuth,
  component: Component,
  ...rest
}: RouteProps) => {
  const { signIn } = useSignIn();

  const token = localStorage.getItem('@Pomodone:token');
  console.log(token);

  return (
    <ReactRouterDomRoute
      {...rest}
      render={({ location }) => {
        if (isNotFound) return <Component />;
        if ({ requiresAuth: false }) return <Component />;
        if ({ requiresAuth: true } && !token) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
              push
            />
          );
        }

        if ({ requiresAuth: true } && token) return <Component />;
        
        return false;
      }}
    />
  );
};

export default Route;
