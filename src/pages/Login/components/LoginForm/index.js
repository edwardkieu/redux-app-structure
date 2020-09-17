//https://reedbarger.com/how-to-use-react-hook-form-for-dead-simple-forms/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import './loginForm.css';

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  onLogin: null,
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email canot be left blank'),
  password: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(),
});

function LoginForm(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { onLogin } = props;
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {
      email: 'kieuminhhien@gmail.com',
      password: 'Abcd1234',
    },
  });

  //const { isDirty, isSubmitting, touched, submitCount } = formState;

  const handleLogin = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      onLogin(data);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="user">
      <div className="form-group">
        <input
          type="email"
          name="email"
          disabled={isSubmitting}
          className="form-control form-control-user"
          aria-describedby="emailHelp"
          placeholder="Enter Email Address..."
          ref={register}
          style={{ borderColor: errors.email && '#a94442' }}
        />
        {errors.email && (
          <p className="input-feedback">{errors.email.message}</p>
        )}
      </div>
      <div className="form-group">
        <input
          disabled={isSubmitting}
          type="password"
          name="password"
          autoComplete="new"
          className="form-control form-control-user"
          placeholder="Password"
          ref={register}
          style={{ borderColor: errors.password && '#a94442' }}
        />
        {errors.password && (
          <p className="input-feedback">{errors.password.message}</p>
        )}
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox small">
          <input
            disabled={isSubmitting}
            type="checkbox"
            className="custom-control-input"
            defaultChecked={true}
            id="customCheck"
          />
          <label className="custom-control-label" htmlFor="customCheck">
            Remember Me
          </label>
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="btn btn-primary btn-user btn-block"
      >
        {isSubmitting ? 'Submitting...' : 'Login'}
      </button>
      <hr />
      <Link to="/auth/login" className="btn btn-google btn-user btn-block">
        <i className="fab fa-google fa-fw" /> Login with Google
      </Link>
      <Link to="/auth/login" className="btn btn-facebook btn-user btn-block">
        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
      </Link>
    </form>
  );
}

export default LoginForm;
