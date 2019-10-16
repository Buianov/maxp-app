import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../components/LoginPage';
import NewsPage from '../components/NewsPage';
import ProfilePage from '../components/ProfilePage';
import NotFound from '../components/NotFound';
import MainPage from '../components/MainPage';
import Header from '../components/Header';

const MainRounter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default MainRounter;
