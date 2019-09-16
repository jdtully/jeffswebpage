import React from "react";
import Square from "./tictactoeSquare";

export default class Board extends React.Component {
constructor(props) {
        super(props) ;
        this.state.rows= [...Array(props.rows)]


}
    

//function add squares to  grid
 //   make a row
 //   add 3 squares to it
  //  make a column 
  //  add 3 rows  to it
  


render(){

    board=()=>(this.state.rows.map()) {
    
            }
    }

    return (
        <div>    

          
        </div>
    )
}

export default Square;
