import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

const SentimentButtons = () => (
  <div>
    <Button as="div" labelPosition="right">
      <Button color="red">
        <Icon name="heartbeat" />
        I'm scared!
      </Button>
      <Label as="a" basic color="red" pointing="left">
        2,048,432
      </Label>
    </Button>
    <Button as="div" labelPosition="right">
      <Button color="blue">
        <Icon name="help" />
        Unsure
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        20,048
      </Label>
    </Button>
    <Button as="div" labelPosition="right">
      <Button color="green">
        <Icon name="hand rock" />
        Bring it on!
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        1,290
      </Label>
    </Button>
  </div>
);

export default SentimentButtons;
