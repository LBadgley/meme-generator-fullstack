import React from 'react';
import PropTypes from 'prop-types';

export default function DisplayView({ topText, image, bottomText }) {
  return (
    <>
      <p>{topText}</p>
      <img src={image} />
      <p>{bottomText}</p>
    </>
  );
}

DisplayView.propTypes = {
  topText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};
