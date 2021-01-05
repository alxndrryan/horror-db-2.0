import React, { useState } from 'react';
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
    <div>
      <div className='container login'>
        <form className='form-signin'>
          <h5>Find A Movie</h5>
          <Input
            name={'title'}
            type={'text'}
            placeholder={'Title'}
            value={title}
            required={''}
            autoComplete={'off'}
            onChange={handleChange}
          />
          <button
            className='btn btn-lg btn-primary btn-block custom-btn'
            type='submit'
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default MovieCall;
