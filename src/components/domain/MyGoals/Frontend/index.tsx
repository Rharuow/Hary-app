import React from "react";
import { ListGroup } from "react-bootstrap";

const FrontendRequiriments = () => {
  return (
    <ListGroup>
      <ListGroup.Item>Frontend</ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        HTML
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        CSS
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Javascript
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        ReactJs
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        NextJs
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        UI/UX
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className="text-center">
        Testes
      </ListGroup.Item>
    </ListGroup>
  );
};

export default FrontendRequiriments;
