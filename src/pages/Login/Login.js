/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import Form from '../../components/Form';
import fields from './fields';
import './styles.css';

export default class Login extends PureComponent {
  render() {
    return (
      <div className="container1">
        <Form
          fields={fields}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        />
      </div>
    );
  }
}
