import React from 'react';
import MainRouter from '../../routers/MainRouter';
import { Provider } from 'react-redux';
import store from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
