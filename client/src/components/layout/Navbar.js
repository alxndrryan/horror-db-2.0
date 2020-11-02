import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-medium'>
      <h1>
        <Link to='/'>
          {' '}
          <i className='fas fa-ghost'></i> Horror DB
        </Link>
      </h1>
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
      </ul>
    </nav>
  );
};

export default Navbar;
