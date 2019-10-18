import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from '../../actions/authActions';
import { Container, Form } from './index.style';
import { isAuth } from '../../helpers/auth';

const LoginPage = ({ onLogin, auth: { error } }) => {
  const redirect = isAuth() ? <Redirect to="/profile" /> : null;
  const [loginValue, setLogin] = useState('');
  const [passValue, setPass] = useState('');

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'login':
        setLogin(e.target.value);
        break;
      case 'pass':
        setPass(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    onLogin({ login: loginValue, pass: passValue });
  };

  return (
    <Container>
      {redirect}

      <Form>
        <div>Use Admin \ 12345 to enter</div>
        <TextField id="login" label="Login" value={loginValue} onChange={handleChange} />
        <TextField
          id="pass"
          label="Password"
          value={passValue}
          onChange={handleChange}
          type="password"
        />
        {error}
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={!loginValue || !passValue}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  onLogin: login,
};

LoginPage.defaultProps = {
  auth: { error: '' },
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
