import React from "react";

class Square extends React.Component {
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
