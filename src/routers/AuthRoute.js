import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AuthRoute = props => {
  const { component: Component } = props;

  if (isAuth()) {
    return <Route component={Component} {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AuthRoute;
