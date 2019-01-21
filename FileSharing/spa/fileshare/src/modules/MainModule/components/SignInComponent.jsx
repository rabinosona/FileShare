import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import alignment from './css/SignInComponent.module.css';

export default class SignInComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={alignment.header}>
          <h1 className={alignment.header_logo}>Hello, world!</h1>
          <Button bsStyle="danger">Test?</Button>
        </div>
      </div>
    );
  }
}