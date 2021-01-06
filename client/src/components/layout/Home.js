import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from './Landing';
import MovieCall from '../MovieCall';

const Home = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      {!loading && !isAuthenticated && <Landing />}

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
      <MovieCall />
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
