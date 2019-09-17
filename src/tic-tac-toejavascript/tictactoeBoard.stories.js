import React from "react";

import { storiesOf } from "@storybook/react";

import { Board } from "../tic-tac-toejavascript/tictactoeBoard";
storiesOf("Board").add("to Storybook", () => <Board rows={3} />);
