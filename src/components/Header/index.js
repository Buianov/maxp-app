import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderContainer } from './index.style';

const Header = () => {
  return (
    <HeaderContainer>
      <Button variant="contained" color="primary" onClick={() => {}}>
        На главную
      </Button>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Новости
      </Button>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Профиль
      </Button>
    </HeaderContainer>
  );
};

export default Header;
