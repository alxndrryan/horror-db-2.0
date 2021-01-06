import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Input from './Input';

function MovieCall() {
  const APIKey = process.env.REACT_APP_API_KEY;
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState(null);

  function handleChange(e) {
    setTitle(e.target.value);
    // console.log(e.target.value);
  }

  function handleClick(e) {
    console.log('clicked', { title });
    let obj = { title };
    console.log(obj.title);
    var replaced = obj.title.replace(/ /g, '+');
    console.log(replaced);
    e.preventDefault();

    fetchData(replaced);
  }

  const fetchData = async (movieTitle) => {
    const response = await axios.get(
      'http://www.omdbapi.com/?t=' + movieTitle + '&plot=full&apikey=' + APIKey
    );
    console.log(movieTitle);
    setMovie(response.data);
    console.log(response.data);
  };

  return (
    <Fragment>
      <section className='bg-medium'>
        <div className='container mobile-container'>
          <div className='landing-inner'>
            <h2 className='medium med-h2'>Find A Movie</h2>
          </div>
          <form className='form movie-form p-2 bg-primary'>
            <div className='form-group'>
              <Input
                className={'btn btn-medium'}
                name={'title'}
                type={'text'}
                placeholder={'Title...'}
                value={title}
                required={''}
                autoComplete={'off'}
                onChange={handleChange}
              />
            </div>
            <input
              className='btn btn-medium'
              value='Search'
              type='submit'
              onClick={handleClick}
            />
          </form>
        </div>
      </section>
      {movie ? (
        <section className='container mobile-container'>
          <div className='landing-inner mobile-landing'>
            <div className='movie-container user'>
              <img src={movie.Poster} alt='Movie Poster' />

              <div className='flex'>
                <div className='item-1'>
                  <h2>{movie.Title}</h2>
                  <p>
                    {movie.Rated} | {movie.Runtime}
                  </p>
                </div>
                <div className='item-2'>
                  <p>{movie.Plot}</p>
                  <hr className='movie-line' />
                  <p>
                    <strong>Director: </strong>
                    {movie.Director}
                  </p>

                  <p>
                    <strong>Stars: </strong>
                    {movie.Actors}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
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
                    'starter' tract house, they become increasingly disturbed by
                    a presence that may or may not be somehow demonic but is
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
      )}
    </Fragment>
  );
}

export default MovieCall;
