import React, { Component } from "react";
import Header from './HeaderComponent'
import UploadFile from './UploadFileComponent'


export default class HomePageComponent extends Component {

  render() {
    return (
      <div>
        <Header />
        <UploadFile />
      </div>
    );
  }
}
