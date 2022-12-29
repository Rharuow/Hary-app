import { ReactElement } from "react";

const backendRequiriments: Array<{
  name: string;
  description: () => ReactElement<any, any>;
}> = [
  {
    name: "NodeJs",
    description: () => (
      <p>
        Software de <strong className="text-yellow">código aberto</strong>,
        multiplataforma, baseado no{" "}
        <strong className="text-yellow">interpretador</strong> v8 do{" "}
        <strong className="text-yellow">Google</strong> que permite a execução
        de códigos <strong className="text-yellow">Javascript</strong> fora do
        navegador Web. Possuindo uma arquitetura{" "}
        <strong className="text-yellow">assíncrona</strong> orientada a eventos.
      </p>
    ),
  },
  {
    name: "Express",
    description: () => (
      <p>
        Uma <strong className="text-yellow">framework</strong> para{" "}
        <strong className="text-yellow">NodeJs</strong> que fornece o mínimos
        recursos para construir servidores web. Possui{" "}
        <strong className="text-yellow">código aberto</strong> sob licença{" "}
        <strong className="text-yellow">MIT</strong>.
      </p>
    ),
  },
  {
    name: "Banco de Dados SQL",
    description: () => (
      <p>
        Estratégia de modelagem de dados em forma de{" "}
        <strong className="text-yellow">tabelas</strong> com{" "}
        <strong className="text-yellow">relacionamento</strong>
        entre elas. Esse relacionamento pode ser feito com{" "}
        <strong className="text-yellow">atributos</strong> chamados de
        <strong className="text-yellow">chave primárias</strong> e{" "}
        <strong className="text-yellow">estrangeiras</strong>. Essa estratégia
        permite fazer <strong className="text-yellow">aninhamento</strong>{" "}
        desses dados. Alguns{" "}
        <strong className="text-yellow">
          gerenciadores de banco de dados (SGDBs)
        </strong>{" "}
        que trabalham com esse tipo de modelagem são que já tive contato foram:{" "}
        <strong className="text-yellow">MySQL</strong>,{" "}
        <strong className="text-yellow">PostgreSQL</strong> e{" "}
        <strong className="text-yellow">MariaDB</strong>
      </p>
    ),
  },
  {
    name: "Banco de Dados NoSQL",
    description: () => (
      <p>
        Esse tipo de banco de dados, as estratégias são diversas. Dentre todas
        essas estratégias já realizei pequenos projetos com
        <strong className="text-yellow"> MongoDB</strong>,{" "}
      </p>
    ),
  },
  {
    name: "NestJs",
    description: () => (
      <p>
        Framework <strong className="text-yellow">NodeJs</strong> de{" "}
        <strong className="text-yellow">código aberto</strong> destinado ao
        desenvolvimento de aplicativos do lado do servidor.
      </p>
    ),
  },
  {
    name: "MVC",
    description: () => (
      <p>
        Arquitetura que divide as aplicações em 3 camadas, sendo elas{" "}
        <strong className="text-yellow">Model</strong>,{" "}
        <strong className="text-yellow">View</strong> e{" "}
        <strong className="text-yellow">Controller</strong>. A camada do Model
        representa a persistência dos dados, representandos as tabelas de um
        banco SQL. A camada do View foi muito utilizada em sistemas monolíticos
        para renderizar o <strong className="text-yellow">HTML</strong> que o
        servidor enviava ao navegador para exibir a página web.
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
        <strong className="text-yellow">histórias de usuário</strong>.
        Utilizando o <strong className="text-yellow">Jest</strong> é possível
        testar rotas e seus retornos. Além disso, também pode se utilizar a
        estratégia de{" "}
        <strong className="text-yellow">In-Memory Database</strong> para validar
        a persistência dos dados sem a necessidade de{" "}
        <strong className="text-yellow">Mocks</strong> de teste.
      </p>
    ),
  },
];

export default backendRequiriments;
