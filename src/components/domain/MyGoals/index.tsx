import React from "react";
import { Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { useLanguageContext } from "../../../context/LanguageContext";
import { Language, translate } from "../../../translate";

const MyGoals = () => {
  const { language } = useLanguageContext();
  return (
    <div className="d-flex justify-content-center algin-items-center px-4 pt-10px flex-wrap">
      <div
        className="transform-translate-top-20px transform-hover mb-3"
        style={{ zIndex: 1 }}
      >
        <p className="text-center mb-0 bg-secondary text-dark fw-bold p-2 mb-3 text-justify rounded-top">
          {translate[language as keyof Language].myGoals.introduction}
        </p>
      </div>
      <div className="d-flex justify-content-around w-100 flex-wrap">
        <div className="transform-translate-top-20px transform-hover z-index-1">
          <h2 className="rounded-top mb-0 text-center fw-bolder">Frontend</h2>
          <Carousel showIndicators={false} width={350} showThumbs={false}>
            {translate[language as keyof Language].myGoals.frontendRequests.map(
              (requiriment) => (
                <Card
                  key={requiriment.name}
                  className="bg-secondary text-white h-100 max-h-307px"
                >
                  <Card.Header>{requiriment.name}</Card.Header>
                  <Card.Body className="d-flex align-items-center">
                    {requiriment.description()}
                  </Card.Body>
                </Card>
              )
            )}
          </Carousel>
        </div>
        <div className="transform-translate-top-20px transform-hover z-index-1">
          <h2 className="rounded-top mb-0 text-center fw-bolder">Backend</h2>
          <Carousel showIndicators={false} width={350} showThumbs={false}>
            {translate[language as keyof Language].myGoals.backendRequests.map(
              (requiriment) => (
                <Card
                  key={requiriment.name}
                  className="bg-secondary text-white h-100 max-h-307px"
                >
                  <Card.Header>{requiriment.name}</Card.Header>
                  <Card.Body className="d-flex align-items-center overflow-auto pt-30px">
                    {requiriment.description()}
                  </Card.Body>
                </Card>
              )
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyGoals;
