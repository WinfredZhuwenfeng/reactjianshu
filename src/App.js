import React, { Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact render={()=>(<div>home</div>)}></Route>
          <Route path='/detail' exact render={()=>(<div>detail</div>)}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
