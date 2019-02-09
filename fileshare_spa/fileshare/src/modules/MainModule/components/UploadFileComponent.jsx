import React, { Component } from "react";
import classNames from "classnames";

import mainCss from "./css/SignInComponent.module.css";

import { BasicApiUrl } from '../../../constants/constants.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default class HomePageComponent extends Component {

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
      <body>
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
    );
  }
}