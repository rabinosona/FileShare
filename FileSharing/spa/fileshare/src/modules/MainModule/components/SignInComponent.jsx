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
          <p className={alignment.header_logo}>Oche bien filehsare!</p>
          <Button className={alignment.header_home} bsStyle="primary">Home</Button>
        </div>
      </div>
    );
  }
}