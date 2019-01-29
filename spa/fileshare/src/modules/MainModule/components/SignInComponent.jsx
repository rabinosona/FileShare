import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import classNames from "classnames";

import mainCss from "./css/SignInComponent.module.css";

import { BasicApiUrl } from '../../../constants/constants.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default class SignInComponent extends Component {
  constructor(props) {
    super(props);
  }

  _handleFileSubmit(event) {
    if (event && event.target.files[0]) {
      let file = event.target.files[0];

      let data = new FormData();
      data.append('file', file);

      fetch(BasicApiUrl + 'uploadFile', {
        method: 'POST',
        body: data
      }).then(response => {
        console.log(response);
      });
    }
  }

  render() {
    return (
      <html>
        <body>
          <div className={mainCss.header}>
            <div className={mainCss.header_logo_container}>
              <div className={mainCss.header_logo}> Oche bien filehsare!</div>
            </div>
            <Button
              className={classNames({
                [mainCss.header_home]: true,
                [mainCss.button]: true
              })}
              bsStyle="link"
            >
              Home
            </Button>
            <Button
              className={classNames({
                [mainCss.header_sign_in]: true,
                [mainCss.button]: true
              })}
              bsStyle="link"
            >
              Sign in
            </Button>
            <Button
              className={classNames({
                [mainCss.header_sign_up]: true,
                [mainCss.button]: true
              })}
              bsStyle="link"
            >
              Sign up
            </Button>
            <FormControl
              className={mainCss.header_search}
              bsStyle=""
              placeholder="Enter text"
            />
          </div>
          <div className={mainCss.background} />
          <div className={mainCss.content}>
            <label
              className={classNames({
                'btn': true,
                'btn-primary': true,
                'btn-file': true,
                [mainCss.upload_button]: true
              })}
            >
              <input
                type="file"
                className={mainCss.input_file_upload}
                onChange={(event) => this._handleFileSubmit(event)}
              />
              <FontAwesomeIcon className={mainCss.upload_button_sign} icon={faCloudUploadAlt} /> Upload file
            </label>
          </div>
        </body>
      </html>
    );
  }
}
