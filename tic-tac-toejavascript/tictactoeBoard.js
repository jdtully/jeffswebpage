import React from "react";
import Square from "./tictactoeSquare";

class Board extends React.Component {
  comstructor(props) {
    super(props);
    this.setstate = {
      value: null
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setstate({ value: "x" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
