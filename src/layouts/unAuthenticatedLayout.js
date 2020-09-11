import React from 'react';
import { Redirect } from 'react-router-dom';

function UnAuthenticatedLayout(props) {
  const { children } = props;
  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
}

export default UnAuthenticatedLayout;
