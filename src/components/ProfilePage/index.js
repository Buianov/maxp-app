import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../../actions/authActions';
import { Container } from './index.style';

const ProfilePage = ({ doLogout, auth: { userName, isLogged } }) => {
  const redirect = !isLogged ? <Redirect to="/" /> : null;
  return (
    <Container>
      {redirect}
      <h1>`Hello $ {userName}. You’ve entered the protected zone`</h1>
      <Button variant="contained" color="secondary" onClick={doLogout}>
        Logout
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  doLogout: logout,
};

ProfilePage.defaultProps = {
  auth: { userName: '', isLogged: false },
};

ProfilePage.propTypes = {
  doLogout: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
