export interface Language {
  US: "US";
  BR: "BR";
}

export const translate = {
  US: {
    apresentation: {
      description: (
        <>
          In constant learning, I consider myself a javascript expert. Choosing
          this paradigm-free programming language seems to be the best choice
          for a fullstack web developer. On my journey, I have much more
          experience with frontend using{" "}
          <span className="text-yellow fw-bolder"> ReactJs/NextJs</span>, but I
          like to venture into the backend using{" "}
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
    navigation: [
      { name: "Home", route: "/" },
      { name: "About me", route: "/about-me" },
      { name: "My goals", route: "my-goals" },
    ],
  },
  BR: {
    apresentation: {
      description: (
        <>
          Em constante aprendizado, me considero um especialista em javascript.
          A escolha dessa linguagem de programação, livre de paradigma, pareceu
          ser a melhor escolha para um desenvolvedor web fullstack. Na minha
          jornada, tenho bem mais experiência com frontend usando
          <span className="text-yellow fw-bolder"> ReactJs/NextJs</span>, porém
          gosto de me aventurar no backend utilizando{" "}
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
    navigation: [
      { name: "Home", route: "/" },
      { name: "Sobre mim", route: "/about-me" },
      { name: "Minhas metas", route: "my-goals" },
    ],
  },
};
