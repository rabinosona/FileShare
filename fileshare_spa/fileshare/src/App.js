import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './containers/MainPage/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' exact component={MainPage} />
      </BrowserRouter>
    );
  }
}

export default App;
