import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-responsive-carousel";

import Navigation from "../Home/Information/Navigation";
import backendRequiriments from "./Backend";

import frontendRequiriments from "./Frontend";

const MyGoals = () => {
  return (
    <div className="min-h-100vh d-flex justify-content-center algin-items-center px-4 pt-10px flex-wrap">
      <Navigation className="w-100 mb-16px" />
      <div style={{ zIndex: 1 }}>
        <p className="text-center mb-0 bg-secondary text-dark fw-bold p-2 text-justify rounded-top">
          Iniciei minha carreira como Desenvolvedor frontend com Javascript,
          porém sempre quis alcançar o status de fullstack. Para tal, segue a
          lista de passos para alcançar tal objetivo:
        </p>
      </div>
      <div className="d-flex justify-content-around w-100">
        <div style={{ zIndex: 1 }}>
          <h2 className="rounded-top mb-0 text-center fw-bolder">Frontend</h2>
          <Carousel showIndicators={false} width={350}>
            {frontendRequiriments.map((requiriment) => (
              <Card
                key={requiriment.name}
                className="bg-secondary text-white h-100"
              >
                <Card.Header>{requiriment.name}</Card.Header>
                <Card.Body className="d-flex align-items-center">
                  {requiriment.description()}
                </Card.Body>
              </Card>
            ))}
          </Carousel>
        </div>
        <div style={{ zIndex: 1 }}>
          <h2 className="rounded-top mb-0 text-center fw-bolder">Backend</h2>
          <Carousel showIndicators={false} width={350}>
            {backendRequiriments.map((requiriment) => (
              <Card
                key={requiriment.name}
                className="bg-secondary text-white h-100 max-h-307px"
              >
                <Card.Header>{requiriment.name}</Card.Header>
                <Card.Body className="d-flex align-items-center overflow-auto pt-30px">
                  {requiriment.description()}
                </Card.Body>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyGoals;
