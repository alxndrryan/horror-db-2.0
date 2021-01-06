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
      {movie && (
        <div className='jumbotron'>
          <h2 className='display-4'>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            {movie.Rated} | {movie.Runtime}
          </p>
          {/* <p>{movie["Ratings"][2]["Value"]}</p> */}
          <img src={movie.Poster} alt='Movie Poster' />
          <p className='lead'>{movie.Plot}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Stars: {movie.Actors}</p>
        </div>
      )}
    </Fragment>
  );
}

export default MovieCall;
