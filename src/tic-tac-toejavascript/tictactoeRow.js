import React, { Component } from "react";
import "./style.css";
import { Square } from "./tictactoeSquare";
import PropTypes from "prop-types";

export class Row extends Component {
  constructor(props) {
    super(props);
    const numCols = props.cols;
    this.state = {
      cols: [...Array(numCols)]
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.cols.map((v, i) => (
          <Square key={i} />
        ))}
      </div>
    );
  }
}
Row.propTypes = {
  cols: PropTypes.number.isRequired
};
