import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Search from '../Search';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='hide-sm'>
        <a href='profile.html'>Profile</a>
      </li>
      <li className='hide-sm'>
        <a href='posts.html'>Post</a>
      </li>
      <li>
        <a href='profiles.html'>Community</a>
      </li>
      <li>
        <Link onClick={logout} to='/'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>

      <li className='hide-sm'>
        <form action='/test'>
          <input type='text' placeholder='Search for movie..' name='search' />
          <Link to='/test'>
            <button type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </Link>
        </form>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='profiles.html'>Community</a>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li className='hide-sm'>
        <form action='index.html'>
          <input type='text' placeholder='Search for movie..' name='search' />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </li>
      <Search />
    </ul>
  );

  return (
    <nav className='navbar bg-medium'>
      <h1>
        <Link to='/'>
          {' '}
          <i className='fas fa-ghost'></i> Horror DB
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
