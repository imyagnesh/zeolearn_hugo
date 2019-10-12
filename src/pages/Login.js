/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import Textbox from '../components/Textbox';
import Form from '../components/Form';
// import Button from '../components/Button/index';

const validation = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 3) {
    errors.password = 'Min 3 Char require';
  } else if (values.password.length > 12) {
    errors.password = 'Max 12 Char require';
  }
  return errors;
};

const productValidation = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'name is Required';
  }
  if (!values.price) {
    errors.price = 'Required';
  }
  return errors;
};

const fields = [
  {
    name: 'username',
    value: '',
    component: Textbox,
    label: 'Username',
    placeholder: 'Username',
  },
  {
    name: 'password',
    value: '',
    component: Textbox,
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'gender',
    value: '',
    component: Textbox,
    label: 'Gender',
    placeholder: 'Gender',
  },
];

const productFields = [
  {
    name: 'name',
    value: '',
    component: Textbox,
    label: 'Product Name',
    placeholder: 'Product Name',
  },
  {
    name: 'price',
    value: '',
    component: Textbox,
    label: 'Product Price',
    placeholder: 'Product Price',
  },
];

export default class Login extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Form
          fields={fields}
          validation={validation}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        />

        <Form
          fields={productFields}
          validation={productValidation}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        />
      </div>
    );
  }
}
