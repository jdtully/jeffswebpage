import React, { Component } from "react";
import "./style.css";
import { Square } from "./tictactoeSquare";

export class Row extends Component {
  constructor(props) {
    super(props);
    const numCols = props.cols;
    this.state = {
      cols: [...Array(numCols)]
    };
  }

  render() {
    return this.state.cols.map((v, i) => <Square key={i} />);
  }
}
