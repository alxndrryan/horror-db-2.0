import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Horror DB</h1>
          <p className='lead'>
            Search for your favorite horror films and connect with a community
            of fellow horror fans
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-primary'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Put Landing in Main component and only show if no one is logged in

export default Landing;
