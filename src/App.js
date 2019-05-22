import React, { Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
