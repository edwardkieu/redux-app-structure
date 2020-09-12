import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import UnAuthenticatedLayout from './../../layouts/unAuthenticatedLayout';

const Login = (props) => {
  useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      window.location.href = '/';
    }
  }, []);

  const handleLogin = async (user) => {
    console.log(user);
  };
  return (
    <UnAuthenticatedLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <LoginForm onLogin={handleLogin} />
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UnAuthenticatedLayout>
  );
};

export default Login;
