import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function UnAuthenticatedLayout({ title, children }) {
  useEffect(() => {
    document.body.classList.add('bg-gradient-primary');
    return () => {
      document.body.classList.remove('bg-gradient-primary');
    };
  }, []);

  if (localStorage.getItem('jwt')) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      {children}
    </>
  );
}

export default UnAuthenticatedLayout;
