import Textbox from '../../components/Textbox';

export default [
  {
    name: 'username',
    component: Textbox,
    label: 'Username',
    placeholder: 'Username',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Username is Required';
      }
      return error;
    },
  },
  {
    name: 'password',
    component: Textbox,
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Password is Required';
      }
      return error;
    },
  },
];
