import React from 'react';
import ModuleComponent from './components/SignInComponent'

export default class MainModule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ModuleComponent></ModuleComponent>
      </div>
    );
  }
}