import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match.');
    } else {
      console.log('Success');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>Create your account</p>
      <form onSubmit={onSubmit} className='form form-border p-2 bg-medium'>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            placeholder='Name'
          />
        </div>
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
        <div className='form-group'>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm Password'
          />
        </div>
        <input className='btn btn-primary' value='register' type='submit' />
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Register;
