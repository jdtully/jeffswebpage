import React, { Component } from "react";
import "./style.css";

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    let style = {};
    Object.assign(
      style,
      this.props.height ? { height: this.props.height } : {}
    );
    Object.assign(
      style,
      this.props.color ? { background: this.props.color } : {}
    );
    Object.assign(
      style,
      this.props.content ? { content: this.props.content } : {}
    );
    return (
      <button className="square" style={style}>
        {this.state.value}
      </button>
    );
  }
}
