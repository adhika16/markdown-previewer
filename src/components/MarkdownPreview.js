import React, { Component } from "react";
import PropTypes from "prop-types";
import { marked } from "marked";

class MarkdownPreview extends Component {
  constructor(props) {
    super(props);
  }

  createMarkup() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      <div id="preview" className="well" dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

MarkdownPreview.propTypes = {};

export default MarkdownPreview;
