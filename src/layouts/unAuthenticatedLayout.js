import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function UnAuthenticatedLayout(props) {
  const { children } = props;

  useEffect(() => {
    document.body.classList.add('bg-gradient-primary');
    return () => {
      document.body.classList.remove('bg-gradient-primary');
    };
  }, []);

  if (localStorage.getItem('jwt')) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
}

export default UnAuthenticatedLayout;
