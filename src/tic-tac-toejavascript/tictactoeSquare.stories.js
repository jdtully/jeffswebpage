import React from "react";

import { storiesOf } from "@storybook/react";

import { Square } from "../tic-tac-toejavascript/tictactoeSquare";

storiesOf("Square")
  .add("Default", () => <Square />)
  .add("blackSquare", () => <Square color="black" />)
  .add("tallSquare", () => <Square height={125} />)
  .add("playerX", () => <Square content="/d7" />);
