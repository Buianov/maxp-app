import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../../actions/authActions';
import { Container } from './index.style';
import { isAuth } from '../../helpers/auth';

const ProfilePage = ({ doLogout }) => {
  const redirect = !isAuth() ? <Redirect to="/" /> : null;
  return (
    <Container>
      {redirect}
      <h1>You’ve entered the protected zone</h1>
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

ProfilePage.propTypes = {
  doLogout: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
