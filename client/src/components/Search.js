import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [formData, setFormData] = useState({
    movie: ''
  });

  const { movie } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(movie);
  };

  return (
    <li className='hide-sm'>
      <form action='/test' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search for movie..'
          name='movie'
          value={movie}
          onChange={onChange}
        />

        <button type='submit'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    </li>
  );
}

export default Search;
