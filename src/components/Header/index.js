import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderContainer } from './index.style';
import { Link } from 'react-router-dom';

const Header = () => {
  const noUnderline = {
    textDecoration: 'none',
  };

  return (
    <HeaderContainer>
      <Link to="/" style={noUnderline}>
        <Button variant="contained" color="primary">
          На главную
        </Button>
      </Link>
      <Link to="/news" style={noUnderline}>
        <Button variant="contained" color="primary">
          Новости
        </Button>
      </Link>
      <Link to="/profile" style={noUnderline}>
        <Button variant="contained" color="primary">
          Профиль
        </Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
