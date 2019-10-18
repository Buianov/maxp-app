import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';

import { Container, Form } from './index.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = ({ onLogin, auth: { error, isLogged } }) => {
  const redirect = isLogged ? <Redirect to="/profile" /> : null;
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
      {redirect}
      <Form>
        <TextField id="login" label="Login" value={login} onChange={handleChange} />
        <TextField
          id="pass"
          label="Password"
          value={pass}
          onChange={handleChange}
          type="password"
        />
        {error}
        <Button variant="contained" color="primary" onClick={onSubmit} disabled={!login || !pass}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
