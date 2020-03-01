import React, { useState, useEffect } from "react";
import {
  Button,
  Icon,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";
import SentimentButtons from "./SentimentButtons";
import SelectMileage from "./SelectMileage";
import { usePosition } from "./usePosition";

const LoginForm = () => {
  const [hasError, setErrors] = useState(false);
  const [giphyResonse, setGiphyResponse] = useState({});
  const [emailSelected, setEmailSelected] = useState(true);
  const [textSelected, setTextSelected] = useState(true);
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    true,
    { enableHighAccuracy: true }
  );

  async function fetchData() {
    const res = await fetch(
      "https://api.giphy.com/v1/gifs/random?tag=zombie&api_key=p6EXnu4Xjh2JCAtrqQpOak5b7D0IRLxW"
    );
    res
      .json()
      .then(res => setGiphyResponse(res.data.image_url))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const divStyle = {
    //backgroundImage: `url(${giphyResonse})`,
    backgroundColor: "rgba(255,62,84,0.1)",
    backgroundSize: "cover"
  };

  const handleChannelClick = (event, result) => {
    const { name, value } = result || event.target;
    if (name === "emailButton") {
      if (emailSelected === false) {
        setEmailSelected(true);
      } else {
        setEmailSelected(false);
      }
    } else {
      if (name === "textButton" && textSelected === false) {
        setTextSelected(true);
      } else {
        setTextSelected(false);
      }
    }
  };

  return (
    <div style={divStyle}>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 800 }}>
          <Header as="h1" color="red" textAlign="center">
            <Image src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png" />{" "}
            Get CoronaVirus (COVID-19) Text & Email Alerts
          </Header>
          <SentimentButtons />
          <br />
          <Form>
            <Segment stacked>
              <Grid columns="equal">
                <Grid.Column>
                  <Button
                    fluid
                    color={emailSelected === true ? "green" : "gray"}
                    name="emailButton"
                    onClick={handleChannelClick}
                    size="massive"
                    icon
                  >
                    <Icon name={emailSelected === true ? "check" : "mail"} />
                    Email
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button
                    fluid
                    name="textButton"
                    onClick={handleChannelClick}
                    color={textSelected === true ? "green" : "gray"}
                    size="massive"
                    icon
                  >
                    <Icon name={textSelected === true ? "check" : "chat"} />
                    Text
                  </Button>
                </Grid.Column>
              </Grid>
              <br />
              <br />

              {emailSelected === true ? (
                <Form.Input
                  fluid
                  size="massive"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email"
                />
              ) : (
                ""
              )}

              {textSelected === true ? (
                <Form.Input
                  fluid
                  size="massive"
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone"
                />
              ) : (
                ""
              )}

              <Form.Input
                fluid
                size="massive"
                icon="pin"
                iconPosition="left"
                placeholder="Location"
                value={`${latitude} ,${longitude}`}
              />
              <SelectMileage />
              <Button size="massive" color="red" fluid>
                Set Up Notifications
              </Button>
            </Segment>
          </Form>
          <Message>
            Track the Corona Virus:{" "}
            <a href="#">John Hopkin's COVID-19 Dashboard</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
