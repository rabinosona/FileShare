import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import classNames from "classnames";

import alignment from "./css/SignInComponent.module.css";

import styled from "styled-components";

export default class SignInComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <body>
          <div className={alignment.header}>
            <div className={alignment.header_logo_container}>
              <div className={alignment.header_logo}> Oche bien filehsare!</div>
            </div>
            <Button
              className={classNames({
                [alignment.header_home]: true,
                [alignment.button]: true
              })}
              bsStyle="link"
            >
              Home
            </Button>
            <Button
              className={classNames({
                [alignment.header_sign_in]: true,
                [alignment.button]: true
              })}
              bsStyle="link"
            >
              Sign in
            </Button>
            <Button
              className={classNames({
                [alignment.header_sign_up]: true,
                [alignment.button]: true
              })}
              bsStyle="link"
            >
              Sign up
            </Button>
            <FormControl
              className={alignment.header_search}
              bsStyle=""
              placeholder="Enter text"
            />
          </div>
          <div className={alignment.background} />
          <div className={alignment.content}>
            <label
              className='btn btn-primary btn-file'
            >
              <input
                type="file"
                className={alignment.input_file_upload}
              />
              <i class="fa fa-cloud-upload" />
              Upload file
            </label>
          </div>
        </body>
      </html>
    );
  }
}
