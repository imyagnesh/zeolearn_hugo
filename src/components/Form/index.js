/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field } from 'formik';

const index = ({ fields, validation, onSubmit }) => {
  return (
    <Formik
      initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}
      onSubmit={onSubmit}
      validate={validation}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
            }}
            onSubmit={handleSubmit}
          >
            {fields.map(field => (
              <Field key={field.name} {...field} />
            ))}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Loading....' : 'Submit'}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

index.propTypes = {
  fields: PropTypes.array.isRequired,
  validation: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default index;
