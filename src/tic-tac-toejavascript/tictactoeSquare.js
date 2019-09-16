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
    return (
      <div>
        <button
          className="square"
          onClick={() => this.setstate({ value: "x" })}
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}
