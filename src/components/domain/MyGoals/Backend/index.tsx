import React from "react";
import { ListGroup } from "react-bootstrap";

const BackendRequiriments = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="text-center">Backend</ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        MCV
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Rotas
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Controladoras
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Repositórios
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Entidades
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Middlewares
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        CORS
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        Serviços
      </ListGroup.Item>
      <ListGroup.Item variant="success" className="text-center">
        NestJs
      </ListGroup.Item>
      <ListGroup.Item variant="dark" className="text-center">
        Testes
      </ListGroup.Item>
    </ListGroup>
  );
};

export default BackendRequiriments;
