import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import { mainPageReducer } from './containers/MainPage/reducer';

import MainPage from './containers/MainPage/index';

const reducers = [mainPageReducer];
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
          <Route path='/' exact component={MainPage} />
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
