import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './loginForm.css';

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  onLogin: null,
};

function LoginForm(props) {
  const { onLogin } = props;
  const handleLogin = (user) => {
    onLogin(user);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        //await new Promise((resolve) => setTimeout(resolve, 1000));
        handleLogin(values);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid.')
          .required('Email cannot be left empty.'),
        password: Yup.string()
          .min(2, 'Password too short.')
          .max(50, 'Password to long.')
          .required('Password cannot be left empty.'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <Form className="user" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter Email Address..."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? 'form-control text-input input-error'
                    : 'form-control text-input'
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? 'form-control text-input input-error'
                    : 'form-control text-input'
                }
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox small">
                <input
                  type="checkbox"
                  name="remeberMe"
                  className="custom-control-input"
                  defaultChecked="true"
                />
                <label className="custom-control-label">Remember Me</label>
              </div>
            </div>
            {/* <button
              type="button"
              className="btn btn-primary btn-user btn-block"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button> */}
            <button
              type="submit"
              className="btn btn-primary btn-user btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? `Submiting...` : `Login`}
            </button>
            <hr />
            <button className="btn btn-google btn-user btn-block">
              <i className="fab fa-google fa-fw" /> Login with Google
            </button>
            <button className="btn btn-facebook btn-user btn-block">
              <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
