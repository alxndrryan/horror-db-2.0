import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>Sign into your account</p>
      <form onSubmit={onSubmit} className='form form-border p-2 bg-medium'>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Email Address'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
          />
        </div>
        <input className='btn btn-primary' value='login' type='submit' />
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Login;
