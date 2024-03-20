import { useState } from "react";
import TooltipMajorComponent from "./TooltipComponent";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
  const [position, setPosition] = useState("left");

  const handleButtonClick = (value) => {
    setPosition(value);
  };

  return (
    <div className="App">
      <TooltipMajorComponent position={position} />
      <ButtonGroup aria-label="Button Group" id="buttons">
        <Button variant="primary" onClick={() => handleButtonClick("left")}>
          Left
        </Button>
        <Button variant="danger" onClick={() => handleButtonClick("top")}>
          Top
        </Button>
        <Button variant="primary" onClick={() => handleButtonClick("right")}>
          Right
        </Button>
        <Button variant="danger" onClick={() => handleButtonClick("bottom")}>
          Bottom
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
