import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Navigation from "../Home/Information/Navigation";
import FrontendRequiriments from "./Frontend";

const MyGoals = () => {
  return (
    <div className="min-h-100vh d-flex justify-content-center algin-items-center p-4 flex-wrap">
      <Navigation className="w-100" />
      <div style={{ zIndex: 1000 }}>
        <p className="text-center mb-0 bg-secondary text-dark fw-bold p-2 text-justify rounded-top">
          Iniciei minha carreira como Desenvolvedor frontend com Javascript,
          porém sempre quis alcançar o status de fullstack. Para tal, segue a
          lista de passos para alcançar tal objetivo:
        </p>
      </div>
      <div className="me-2">
        <FrontendRequiriments />
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default MyGoals;
