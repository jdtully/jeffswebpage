import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <blockquote>
              <h1>
                My Name is <br />
                Jeffrey Tully
                <br />
                I am currently working on
                <br /> improving my life.
              </h1>
            </blockquote>
            <h1>Welcome All!</h1>
          </div>
          <div className="col-sm-2">
            <h2> Current Projects </h2>
            <ol>
              <li>
                <a href="tic-tac-toejavascript/root.html">Tic Tac Toe</a>{" "}
              </li>
              <li>
                <a href="src/battleshipjavascript/index.html">Javascript</a>
              </li>

              <li> Project 3</li>
              <li> Project 4</li>
              <li> Project 5</li>
              <li> Project 6</li>
            </ol>
          </div>
          <div className="col-sm-2"></div>
          <div id="me">
            <h2> About Me </h2>
            <img src="./" alt=" smiling  me" height="100" width="100" />
            <h2>
              <a href="/resume.html"> My Resume </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
