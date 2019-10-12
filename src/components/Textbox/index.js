/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import './style.css';

const index = ({ field, ...props }) => {
  return (
    <div className="container">
      <input className="textbox" type="text" {...field} {...props} />
      <ErrorMessage name={field.name}>
        {msg => <div className="inlineError">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

index.propTypes = {
  field: PropTypes.object.isRequired,
};

export default index;
