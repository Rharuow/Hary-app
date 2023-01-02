export interface Language {
  US: "US";
  BR: "BR";
}

export const translate = {
  US: {
    home: {
      apresentation: {
        description: (
          <>
            In constant learning, I consider myself a javascript expert.
            Choosing this paradigm-free programming language seems to be the
            best choice for a fullstack web developer. On my journey, I have
            much more experience with frontend using{" "}
            <span className="text-yellow fw-bolder"> ReactJs/NextJs</span>, but
            I like to venture into the backend using{" "}
            <span className="text-yellow fw-bolder">NodeJs</span> with{" "}
            <span className="text-yellow fw-bolder">NestJs</span>.
          </>
        ),
        title: (
          <>
            <h1 className="text-gray-300">Developer</h1>
            <h1 className="text-yellow">Web</h1>
          </>
        ),
      },
    },
    navigation: [
      { name: "Home", route: "/" },
      { name: "About me", route: "/about-me" },
      { name: "My goals", route: "my-goals" },
    ],
    aboutMe: (
      <>
        <p className="text-center mb-0 bg-secondary text-dark fw-bold p-2 text-justify rounded-top">
          Bachelor in Biological Sciences from UFRN (Federal University of Rio
          Grande Norte), I have always been looking for tools to automate and
          organize data and technical-scientific processes. In search of
          producing a digital educational tool, my interest in programming
          arose, and so, I programmed for the first time a monolithic system
          using <strong className="text-yellow">Ruby on Rails</strong>. Due to
          limited time and resources, the tool was not completed. So, after
          studying and creating some projects with{" "}
          <strong className="text-yellow">WordPress</strong>, eand in order to
          seek real experiences in the area of web development, I decided to
          venture into freelance projects on platforms like{" "}
          <strong className="text-yellow">Workana</strong>. Despite a good
          salary, working with{" "}
          <strong className="text-yellow">Wordpress</strong> was not that
          challenging and I felt that there was no evolution as a developer
          doing only freelance projects. Finally, I sought contact with real
          projects and real clients in the private sector. In my first job, I
          joined at{" "}
          <strong className="text-yellow">Tootz Soluções Tecnológicas</strong>{" "}
          in September 2019. There I had incredible experiences as an intern and{" "}
          <strong className="text-yellow">JUNIOR</strong>. Despite being a{" "}
          <strong className="text-yellow">software house</strong>, a startup has
          always sought to work with a well-defined stack, namely
          <strong className="text-yellow">React</strong>, with{" "}
          <strong className="text-yellow">NextJs</strong> on the frontend and{" "}
          <strong className="text-yellow">Ruby on Rails</strong> on the backend.
        </p>
      </>
    ),
  },
  BR: {
    home: {
      apresentation: {
        description: (
          <>
            Em constante aprendizado, me considero um especialista em
            javascript. A escolha dessa linguagem de programação, livre de
            paradigma, pareceu ser a melhor escolha para um desenvolvedor web
            fullstack. Na minha jornada, tenho bem mais experiência com frontend
            usando
            <span className="text-yellow fw-bolder"> ReactJs/NextJs</span>,
            porém gosto de me aventurar no backend utilizando{" "}
            <span className="text-yellow fw-bolder">NodeJs</span> com{" "}
            <span className="text-yellow fw-bolder">NestJs</span>.
          </>
        ),
        title: (
          <>
            <h1 className="text-yellow">Web</h1>
            <h1 className="text-gray-300">Desenvolvedor</h1>
          </>
        ),
      },
    },
    navigation: [
      { name: "Home", route: "/" },
      { name: "Sobre mim", route: "/about-me" },
      { name: "Minhas metas", route: "my-goals" },
    ],
    aboutMe: (
      <>
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
      </>
    ),
  },
};
