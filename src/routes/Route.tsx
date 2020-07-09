/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  RouteProps as ReactRouterDomProps,
  Route as ReactRouterDomRoute,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactRouterDomProps {
  requiresAuth?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  requiresAuth = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const token = localStorage.getItem('@Pomodone:token');

  return (
    <ReactRouterDomRoute
      {...rest}
      render={() => {
        if (requiresAuth && !token) {
          return <Redirect to={{ pathname: '/' }} />;
        }

        return <Component />;
      }}
    />
  );
};

export default Route;
