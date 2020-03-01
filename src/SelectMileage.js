import React, { Component, useState } from "react";
import { Dropdown, Grid, Segment, Label } from "semantic-ui-react";

const options = [
  { key: 1, text: "25 miles away", value: 25 },
  { key: 2, text: "50 miles away", value: 50 },
  { key: 3, text: "100 miles away", value: 100 },
  { key: 4, text: "250 miles away", value: 250 }
];

function SelectMileage() {
  const [selectedMileage, setMileage] = useState("");

  const handleMileageUpdate = (event, result) => {
    const { name, value } = result || event.target;
    alert(name);
    setMileage(value);
  };

  return (
    <div>
      <Label fluid size="massive">
        <Dropdown
          name="myName"
          fluid
          size="massive"
          onChange={handleMileageUpdate}
          options={options}
          placeholder="Notify me when virus is..."
          selection
        />
      </Label>
      <pre>Current value: {selectedMileage}</pre>
    </div>
  );
}

export default SelectMileage;
