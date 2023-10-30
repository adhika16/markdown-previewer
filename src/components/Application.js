import React, { Component } from "react";
import UserInput from "./UserInput";


class Application extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="text-center">Markdown Live Preview</h1>
            <hr />
          </div>
        </div>
        <UserInput />
      </div>
    );
  }
}

export default Application;
