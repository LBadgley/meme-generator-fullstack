import React from 'react';
import PropTypes from 'prop-types';

export default function TextPicker({ topText, bottomText, handleChange }) {
  return (
    <>
      <p>Top Text:</p>
      <input name="topText" type="text" value={topText} onChange={handleChange} />
      <p>Bottom text:</p>
      <input name="bottomText" type="text" value={bottomText} onChange={handleChange} />
    </>
  );
}

TextPicker.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
