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
    myGoals: {
      introduction:
        "I started my career as a frontend developer with Javascript, but I always wanted to reach fullstack status. To do so, follow the list of steps to achieve this goal:",
      frontendRequests: [
        {
          name: "HTML",
          description: () => (
            <p>
              Markup language used by browsers to display{" "}
              <strong className="text-yellow">web pages</strong>. The main
              characteristic of this language is the use of{" "}
              <strong className="text-yellow">tags</strong>, which contextualize
              the content.
            </p>
          ),
        },
        {
          name: "Javascript",
          description: () => (
            <p>
              <strong className="text-yellow">Object-based</strong>, interpreted
              programming language with{" "}
              <strong className="text-yellow"> first-class functions</strong>.
              Initially created for the web, it invaded the{" "}
              <strong className="text-yellow">mobile</strong> development
              environment with tools like{" "}
              <strong className="text-yellow">React Native</strong>, the desktop
              application environment with tools like{" "}
              <strong className="text-yellow">ElectronJs</strong> and servers
              that run <strong className="text-yellow">NodeJs</strong>.
            </p>
          ),
        },
        {
          name: "ReactJs",
          description: () => (
            <p>
              <strong className="text-yellow">Javascript-based</strong> library
              for creating{" "}
              <strong className="text-yellow">event-reactive</strong>{" "}
              components.
            </p>
          ),
        },
        {
          name: "NextJs",
          description: () => (
            <p>
              Framework based on the{" "}
              <strong className="text-yellow">ReactJs</strong> library,
              maintained by <strong className="text-yellow">Vercel</strong>,
              with the main purpose of facilitating the deployment process. With{" "}
              <strong className="text-yellow">
                Server Side Rendering (SSR)
              </strong>
              , the folder architecture allows for quick and easy routing of an{" "}
              <strong className="text-yellow">API</strong> and client-side
              application.
            </p>
          ),
        },
        {
          name: "UI/UX",
          description: () => (
            <p>
              <strong className="text-yellow">User Experience</strong> and{" "}
              <strong className="text-yellow">User Interface</strong>, despite
              walking together, their concepts are very different. While the UX
              works with the user`&apos;`s experience regarding the usability of
              the{" "}
              <strong className="text-yellow">
                product`&apos;`s functionalities
              </strong>
              , the UI works with the way the user interacts with the product,
              so one is complementary to the other, so their acronyms go
              together in general.
            </p>
          ),
        },
        {
          name: "Tests",
          description: () => (
            <p>
              Tests are <strong className="text-yellow">automated</strong> ways
              to validate <strong className="text-yellow">use cases</strong> of
              features told by{" "}
              <strong className="text-yellow">user stories</strong>. The main
              tool used for testing is{" "}
              <strong className="text-yellow">JestJs</strong> which, together
              with other tools, automatically checks each rendered element.
            </p>
          ),
        },
      ],
    },
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
    myGoals: {
      introduction:
        "Iniciei minha carreira como Desenvolvedor frontend com Javascript, porém sempre quis alcançar o status de fullstack. Para tal, segue a lista de passos para alcançar tal objetivo:",
      frontendRequests: [
        {
          name: "HTML",
          description: () => (
            <p>
              Linguagem de marcação utilizada por navegadores para exibir
              páginas <strong className="text-yellow">web</strong>. A principal
              caracteristica dessa linguagem é o uso de{" "}
              <strong className="text-yellow">tags</strong>, que contextualizam
              o conteúdo.
            </p>
          ),
        },
        {
          name: "Javascript",
          description: () => (
            <p>
              Linguagem de programação,
              <strong className="text-yellow">interpretada</strong> e baseada em
              <strong className="text-yellow"> objetos</strong> com{" "}
              <strong className="text-yellow"> funções </strong> de primeira
              classe. Criada inicialmente para <strong> web</strong>, invadiu o
              ambiente do desenvolvimento mobile com ferramentas como{" "}
              <strong className="text-yellow">React Native</strong>, o ambiente
              das aplicações Desktop com ferramentas como o{" "}
              <strong className="text-yellow">ElectronJs</strong> e os
              servidores que rodam{" "}
              <strong className="text-yellow">NodeJs</strong>.
            </p>
          ),
        },
        {
          name: "ReactJs",
          description: () => (
            <p>
              Biblioteca baseada em{" "}
              <strong className="text-yellow">Javascript</strong> para criação
              de componentes reativos a eventos.
            </p>
          ),
        },
        {
          name: "NextJs",
          description: () => (
            <p>
              Framework baseada na biblioteca{" "}
              <strong className="text-yellow">ReactJs</strong>, mantida pela{" "}
              <strong className="text-yellow">Vercel</strong>, com a principal
              finalidade de facilitar o processo de deploy. Com a renderização
              do lado do servidor{" "}
              <strong className="text-yellow">
                (Server Side Rendering - SSR)
              </strong>
              , a arquitetura de pastas permite uma fácil e rapida criação de
              rotas de uma <strong className="text-yellow">API</strong> e da
              aplicação do lado do cliente.
            </p>
          ),
        },
        {
          name: "UI/UX",
          description: () => (
            <p>
              <strong className="text-yellow">User Experience</strong> e{" "}
              <strong className="text-yellow">User Interface</strong>, apesar de
              caminharem juntos, seus conceitos são bem distintos. Enquanto o UX
              trabalha com a experiência do usuário com relação a usabildiade
              das funcionalidades do produto, o UI trabalha com a forma da
              interação do usuário com o produto, portanto um é complementar do
              outro, por isso suas siglas andam juntas em geral.
            </p>
          ),
        },
        {
          name: "Testes",
          description: () => (
            <p>
              Testes são formas{" "}
              <strong className="text-yellow">automatizadas</strong> para
              validar <strong className="text-yellow">casos de usos</strong> de
              funcionalidades contadas por{" "}
              <strong className="text-yellow">histórias de usuário</strong>. A
              principal ferramenta utilizada pra teste é o{" "}
              <strong className="text-yellow">JestJs</strong> que em conjunto
              com outras ferramentas, verifica de forma automatizada cada
              elemento renderizado.
            </p>
          ),
        },
      ],
    },
  },
};
