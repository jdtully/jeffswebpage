import { Component } from "react";
import "./style.css";
import Square from "./tictactoeSquare";

export class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [...Array(props.cols)]
    };
  }

  render() {
    return this.props.cols.map(() => Square);
  }
}
