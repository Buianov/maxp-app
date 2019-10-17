import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import Button from '@material-ui/core/Button';
import { Container } from './index.style';

const ProfilePage = ({ logout }) => {
  return (
    <Container>
      <h1>You've entered the protected zone</h1>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProfilePage);
