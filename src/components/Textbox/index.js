/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Index = ({ label, name, error, ...props }) => {
  return (
    <div className="container">
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} className="textbox" type="text" {...props} />
      {error && <span className="inlineError">{error}</span>}
    </div>
  );
};

Index.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

Index.defaultProps = {
  label: '',
  error: ''
};

export default Index;
