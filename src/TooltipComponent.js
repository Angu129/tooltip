import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TooltipMajorComponent({ position }) {
  return (
    <>
      <OverlayTrigger
        className="tooltip"
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}`}>
            {position}: Hovering Tooltip.
          </Tooltip>
        }
      >
        <Button variant="dark">Hover on me !!</Button>
      </OverlayTrigger>
    </>
  );
}

export default TooltipMajorComponent;
