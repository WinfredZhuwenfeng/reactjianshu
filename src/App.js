import React, { Fragment } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages//login';
import PostArc from './pages/postArc';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/postarc' exact component={PostArc}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
