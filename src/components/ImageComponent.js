import React from 'react';
import PropTypes from 'prop-types';

export default function ImagePicker({ image, handleChange }) {
  return (
    <>
      <p>Image: </p>
      <input name="image" type="text" value={image} onChange={handleChange} />
    </>
  );
}

ImagePicker.propTypes = {
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
