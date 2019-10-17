import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

import { Container, Form } from './index.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = ({ onLogin }) => {
  let [login, setLogin] = useState('');
  let [pass, setPass] = useState('');

  const handleChange = e => {
    switch (e.target.id) {
      case 'login':
        setLogin(e.target.value);
        return;
      case 'pass':
        setPass(e.target.value);
        return;
      default:
        return;
    }
  };

  const onSubmit = () => {
    onLogin({ login, pass });
  };

  return (
    <Container>
      <Form>
        <TextField id="login" label="Login" value={login} onChange={handleChange} />
        <TextField
          id="pass"
          label="Password"
          value={pass}
          onChange={handleChange}
          type="password"
        />
        <Button variant="contained" color="primary" onClick={onSubmit} disabled={!login || !pass}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
