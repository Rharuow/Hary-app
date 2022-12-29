import { ReactElement } from "react";

const frontendRequiriments: Array<{
  name: string;
  description: () => ReactElement<any, any>;
}> = [
  {
    name: "HTML",
    description: () => (
      <p>
        Linguagem de marcação utilizada por navegadores para exibir páginas{" "}
        <strong className="text-yellow">web</strong>. A principal caracteristica
        dessa linguagem é o uso de <strong className="text-yellow">tags</strong>
        , que contextualizam o conteúdo.
      </p>
    ),
  },
  {
    name: "CSS",
    description: () => (
      <p>
        Linguagem de <strong className="text-yellow">estilo</strong> escrita e
        lida em cascata. Geralmente associada a um arquivo{" "}
        <strong className="text-yellow">HTML</strong> ou{" "}
        <strong className="text-yellow">XML</strong>.
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
        <strong className="text-yellow"> funções </strong> de primeira classe.
        Criada inicialmente para <strong> web</strong>, invadiu o ambiente do
        desenvolvimento mobile com ferramentas como{" "}
        <strong className="text-yellow">React Native</strong>, o ambiente das
        aplicações Desktop com ferramentas como o{" "}
        <strong className="text-yellow">ElectronJs</strong> e os servidores que
        rodam <strong className="text-yellow">NodeJs</strong>.
      </p>
    ),
  },
  {
    name: "ReactJs",
    description: () => (
      <p>
        Biblioteca baseada em{" "}
        <strong className="text-yellow">Javascript</strong> para criação de
        componentes reativos a eventos.
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
        finalidade de facilitar o processo de deploy. Com a renderização do lado
        do servidor{" "}
        <strong className="text-yellow">(Server Side Rendering - SSR)</strong>,
        a arquitetura de pastas permite uma fácil e rapida criação de rotas de
        uma <strong className="text-yellow">API</strong> e da aplicação do lado
        do cliente.
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
        trabalha com a experiência do usuário com relação a usabildiade das
        funcionalidades do produto, o UI trabalha com a forma da interação do
        usuário com o produto, portanto um é complementar do outro, por isso
        suas siglas andam juntas em geral.
      </p>
    ),
  },
  {
    name: "Testes",
    description: () => (
      <p>
        Testes são formas <strong className="text-yellow">automatizadas</strong>{" "}
        para validar <strong className="text-yellow">casos de usos</strong> de
        funcionalidades contadas por{" "}
        <strong className="text-yellow">histórias de usuário</strong>. A
        principal ferramenta utilizada pra teste é o{" "}
        <strong className="text-yellow">JestJs</strong> que em conjunto com
        outras ferramentas, verifica de forma automatizada cada elemento
        renderizado.
      </p>
    ),
  },
];

export default frontendRequiriments;
