import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    location: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    movies: []
  });

  const {
    location,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    movies
  } = formData;

  return (
    <Fragment>
      <section class='container create-profile'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-spider'></i> What's your favorite scary movie?
        </p>
        <p className='small'>* = required field</p>
        <form className='form form-border cust-form bg-medium my-1'>
          <div className='form-group'>
            <input
              className='input-border'
              type='text'
              placeholder='* 3 favorite horror movies'
              name='movies'
            />
            <small className='form-text'>
              Please use comma seperated value and exact spelling!
            </small>
          </div>
          <div className='form-group'>
            <textarea
              className='input-border'
              name='bio'
              rows='5'
              placeholder='Let us know if there are any skeletons in your closet...'
            ></textarea>
            <small className='form-text'>Tell us about yourself</small>
          </div>

          <div className='my-2'>
            <button type='button' className='btn btn-light'>
              Add Social Network Links
            </button>
            <span className='hide-sm'>Optional</span>
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-twitter fa-2x hide-sm'></i>
            <input type='text' placeholder='Twitter URL' name='twitter' />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-facebook fa-2x hide-sm'></i>
            <input type='text' placeholder='Facebook URL' name='facebook' />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-youtube fa-2x hide-sm'></i>
            <input type='text' placeholder='YouTube URL' name='youtube' />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-linkedin fa-2x hide-sm'></i>
            <input type='text' placeholder='LinkedIn URL' name='linkedin' />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-instagram fa-2x hide-sm'></i>
            <input type='text' placeholder='Instagram URL' name='instagram' />
          </div>
          <input type='submit' className='btn btn-primary my-1' />
          <a href='profile.html' className='btn btn-light my-1'>
            Go Back
          </a>
        </form>
        <a href='profile.html' className='btn btn-primary my-1'>
          Delete Account
        </a>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
