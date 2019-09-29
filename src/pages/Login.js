import React, { PureComponent } from 'react';
import Textbox from '../components/Textbox/index';
import Button from '../components/Button/index';

export default class Login extends PureComponent {
  state = {
    user: {
      username: '',
      password: '',
    },
    error: {},
  };

  onTextChange = e => {
    const { user } = this.state;
    this.setState(
      { user: { ...user, [e.target.name]: e.target.value } },
      () => {
        this.setState({ error: {} });
      },
    );
  };

  submit = e => {
    e.preventDefault();
    const { user } = this.state;
    const error = {};
    if (!user.username) {
      error.username = 'UserName required';
    }
    if (!user.password) {
      error.password = 'Password required';
    }
    this.setState({ error });
  };

  render() {
    const { user, error } = this.state;
    console.warn('error', error);
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
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
          }}
          onSubmit={this.submit}
          noValidate
        >
          <Textbox
            name="username"
            label="Username"
            placeholder="Username"
            value={user.username}
            onChange={this.onTextChange}
            error={error.username}
          />
          <Textbox
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={this.onTextChange}
            error={error.password}
          />
          <Button disable type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
