import React from "react";

const Apresentation = () => {
  return (
    <div className="d-flex flex-column-reverse p-4 w-50">
      <p className="text-gray-400">
        Em constante aprendizado, me considero um especialista em javascript. A
        escolha dessa linguagem de programação, livre de paradigma, pareceu ser
        a melhor escolha para um desenvolvedor web fullstack. Na minha jornada,
        tenho bem mais experiência com frontend usando
        <span className="text-yellow fw-bolder"> ReactJs/NextJs</span>, porém
        gosto de me aventurar no backend utilizando{" "}
        <span className="text-yellow fw-bolder">NodeJs</span> com{" "}
        <span className="text-yellow fw-bolder">NestJs</span>.
      </p>
      <h1 className="text-yellow">Web</h1>
      <h1 className="text-gray-300">Desenvolvedor</h1>
    </div>
  );
};

export default Apresentation;
