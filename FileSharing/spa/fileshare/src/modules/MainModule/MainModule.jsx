import React from 'react';
import SignInComponent from './components/SignInComponent'

export default class MainModule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SignInComponent></SignInComponent>
      </div>
    );
  }
}