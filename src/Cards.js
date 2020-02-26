import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const cardData = [
  {
    header: "Penis Data",
    meta: "Penis Data",
    description: "Penis ",
    friends: "124 fat penises waiting for you"
  }
];

const CardExampleCard = ({ cardData }) => (
  <div>
    {cardData.map(cardIter => (
      <Card>
        <Card.Content>
          <Card.Header>{cardIter.header}</Card.Header>
          <Card.Meta>
            <span className="date">{cardIter.meta}</span>
          </Card.Meta>
          <Card.Description>{cardIter.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {cardIter.friends}
          </a>
        </Card.Content>
      </Card>
    ))}
  </div>
);

function Cards() {
  const [addLogStatus, setAddLogStatus] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <CardExampleCard cardData={cardData} />
    </div>
  );
}

export default Cards;
