import React, { Component } from "react";
import PropTypes from "prop-types";
import MarkdownPreview from "./MarkdownPreview";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      md: '',
    };
  }

  componentDidMount() {
    const readmePath = require("../templates/template.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
            md: text
        })
      })
  }

  updatePreview(e) {
    this.setState({
      md: e.target.value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Enter Markdown</h3>
          <textarea
            id="editor"
            type="text"
            className="md-input"
            value={this.state.md}
            onChange={this.updatePreview.bind(this)}
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Result</h3>
          <MarkdownPreview markdown={this.state.md} />
        </div>
      </div>
    );
  }
}

UserInput.propTypes = {};

export default UserInput;
