import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from './Landing';

const Home = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      r{!loading && !isAuthenticated && <Landing />}
      <section className='container mobile-container'>
        <div className='landing-inner mobile-landing'>
          <h1 className='large'>Film of the Week</h1>
          <div className='movie-container'>
            <img
              src='https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
              alt=''
            />

            <div className='flex'>
              <div className='item-1'>
                <h2>Friday the 13th</h2>
                <p>R | 95 min</p>
              </div>
              <div className='item-2'>
                <p>
                  One summer at Camp Crystal Lake, a group of young counselors
                  begin to get ready to lead campers. Unfortunately for the
                  former, someone isn't happy about what's going on in the camp
                  and enjoys playing kill the counselor. As bodies fall to the
                  ground in the camp, no one is safe.
                </p>
                <hr className='movie-line' />
                <p>
                  <strong>Director: </strong>Sean S. Cunningham
                </p>

                <p>
                  <strong>Stars: </strong>Betsy Palmer, Adrienne King, Jeannine
                  Taylor, Robbi Morgan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-medium'>
        <div className='container mobile-container'>
          <div className='landing-inner'>
            <h2 className='medium med-h2'>Find A Movie</h2>
          </div>

          <form action='home.html' className='form movie-form p-2 bg-primary'>
            <div className='form-group'>
              <input type='text' placeholder='Title...' />
            </div>
            <input className='btn btn-medium' value='Search' type='submit' />
          </form>
        </div>
      </section>
      <section className='container mobile-container'>
        <div className='landing-inner mobile-landing'>
          <div className='movie-container user'>
            <img
              src='https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_SX300.jpg'
              alt=''
            />

            <div className='flex'>
              <div className='item-1'>
                <h2>Paranormal Activity</h2>
                <p>R | 86 min</p>
              </div>
              <div className='item-2'>
                <p>
                  After a young, middle class couple moves into a suburban
                  'starter' tract house, they become increasingly disturbed by a
                  presence that may or may not be somehow demonic but is
                  certainly most active in the middle of the night. Especially
                  when they sleep. Or try to.
                </p>
                <hr className='movie-line' />
                <p>
                  <strong>Director: </strong>Oren Peli
                </p>

                <p>
                  <strong>Stars: </strong>Katie Featherston, Micah Sloat, Mark
                  Fredrichs, Amber Armstrong
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
