import React from "react";

import { storiesOf } from "@storybook/react";

import { Square } from "../tic-tac-toejavascript/tictactoeSquare";
import { Row } from "../tic-tac-toejavascript/tictactoeRow";

storiesOf("Square").add("to Storybook", () => <Square />);
storiesOf("Row").add("to Storybook", () => <Row />);
