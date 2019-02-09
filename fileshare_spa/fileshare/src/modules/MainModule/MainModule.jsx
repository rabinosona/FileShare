import React from 'react';
import HomePageComponent from './components/HomeComponent';

export default class MainModule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomePageComponent></HomePageComponent>
      </div>
    );
  }
}