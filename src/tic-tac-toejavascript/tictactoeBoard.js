import React, { Component } from "react";
import "./style.css";
import { Row } from "./tictactoeRow";

export class Board extends Component {
  constructor(props) {
    super(props);
    const numRows = props.rows;
    this.state = {
      rows: [...Array(numRows)]
    };
  }

  render() {
    return this.state.rows.map((w, j) => <Row key={j} />);
  }
}
