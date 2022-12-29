import React from "react";
import Navigation from "../Home/Information/Navigation";

const AboutMe = () => {
  return (
    <div className="min-h-100vh d-flex justify-content-center algin-items-center p-4 flex-wrap">
      <Navigation className="w-100" />
      <div style={{ zIndex: 1000 }}>
        <p className="text-center mb-0 bg-secondary text-dark fw-bold p-2 text-justify rounded-top">
          Bacharel em Ciências Biológicas pela UFRN (Universidade Federal do Rio
          Grande Norte), sempre busquei ferramentas para automatizar e organizar
          dados e processos técnico-científicos. Em busca de produzir uma
          ferramenta educacional digital, meu interesse pela programação surgiu,
          e então, programei pela primeira vez um sistema monolítico utilizando{" "}
          <strong className="text-yellow">Ruby on Rails</strong>. Devido ao
          pouco tempo e recursos, a ferramenta não foi concluída. Então, após
          estudar e criar alguns projetos com{" "}
          <strong className="text-yellow">WordPress</strong>, e com a finalidade
          de buscar experiências reais na área de desenvolvimento web, resolvi
          me aventurar com projetos freelancers em plataformas como{" "}
          <strong className="text-yellow">Workana</strong>. Apesar de uma boa
          remuneração, trabalhar com{" "}
          <strong className="text-yellow">Wordpress</strong> não era tão
          desafiador e sentia que não havia evolução como desenvolvedor
          realizando apenas projetos freelancers. Por fim, busquei na iniciativa
          privada contato com projetos reais e clientes reais. No primeiro
          emprego, entrei na{" "}
          <strong className="text-yellow">Tootz Soluções Tecnológicas</strong>{" "}
          em setembro de 2019. Lá tive experiências incríveis como estagiário e{" "}
          <strong className="text-yellow">JUNIOR</strong>. Apesar de ser uma{" "}
          <strong className="text-yellow">software house</strong>, a startup
          sempre buscou trabalhar com uma stack bem definida, sendo ela{" "}
          <strong className="text-yellow">React</strong>, com{" "}
          <strong className="text-yellow">NextJs</strong> no frontend e{" "}
          <strong className="text-yellow">Ruby on Rails</strong> no backend.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
