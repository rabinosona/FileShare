import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import classNames from "classnames";

import moduleCss from "./css/ModuleComponent.module.css";

export default class ModuleComponent extends Component {
  constructor(props) {
    super(props);
  }

  _uploadFile() {

  }

  render() {
    return (
      <html>
        <body>
          <div className={moduleCss.header}>
            <div className={moduleCss.header_logo_container}>
              <div className={moduleCss.header_logo}> Oche bien filehsare!</div>
            </div>
            <Button
              className={classNames({
                [moduleCss.header_home]: true,
                [moduleCss.button]: true
              })}
              bsStyle="link"
            >
              Home
            </Button>
            <Button
              className={classNames({
                [moduleCss.header_sign_in]: true,
                [moduleCss.button]: true
              })}
              bsStyle="link"
            >
              Sign in
            </Button>
            <Button
              className={classNames({
                [moduleCss.header_sign_up]: true,
                [moduleCss.button]: true
              })}
              bsStyle="link"
            >
              Sign up
            </Button>
            <FormControl
              className={moduleCss.header_search}
              bsStyle=""
              placeholder="Enter text"
            />
          </div>
          <div className={moduleCss.background}>
          </div>
          <div className={moduleCss.content}>
              <Button onClick={(file) => this._uploadFile(file)}>Upload the file...</Button>
          </div>
        </body>
      </html>
    );
  }
}
