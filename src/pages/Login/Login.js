/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import fields from './fields';
import './styles.css';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values, actions) {
    console.log(this.props);
    try {
      const res = await fetch('http://localhost:3004/user', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const user = await res.json();
      const { history } = this.props;
      sessionStorage.setItem('username', user.username);
      history.push('/admin');
    } catch (error) {
      actions.resetForm({ username: '', password: '' });
      actions.setErrors({ serverError: error.message });
    } finally {
      actions.setSubmitting(false);
    }
  }

  render() {
    return (
      <div className="container1">
        <Form fields={fields} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
