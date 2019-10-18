import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AuthRoute = (props) => {
  const { component: Component } = props;
  if (isAuth()) {
    return <Route component={Component} {...props} />;
  }
  return <Redirect to="/login" />;
};

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthRoute;
