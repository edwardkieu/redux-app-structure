import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import UnAuthenticatedLayout from './../../layouts/unAuthenticatedLayout';
import { login } from './login.thunks';
import { useHistory } from 'react-router-dom';
import { PATH } from './../../constants/paths';

const Login = (props) => {
  const { login, loading } = props;
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      history.push(PATH.HOME);
    }
  }, [loading, history, props]);

  const handleLogin = async (payload) => {
    login(payload).then(() => {
      history.push(PATH.HOME);
    });
  };
  return (
    <UnAuthenticatedLayout title="Login">
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
                        <a className="small" href="/auth/login">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/auth/login">
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

const mapStateToProps = (state) => ({
  loading: state.login.loading,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
