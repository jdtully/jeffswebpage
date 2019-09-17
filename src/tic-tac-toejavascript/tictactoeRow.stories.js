import React from "react";

import { storiesOf } from "@storybook/react";

import { Row } from "../tic-tac-toejavascript/tictactoeRow";

storiesOf("Row").add("to Storybook", () => <Row cols={3} />);
