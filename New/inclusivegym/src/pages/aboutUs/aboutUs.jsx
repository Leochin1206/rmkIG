import background from "../../images/grupo.jpeg";
import logo from "../../images/logo.png";
import andrePicture from "../../images/foto_andre.jpg";
import julioPicture from "../../images/foto_julio.jpeg";
import leoPicture from "../../images/foto_leonardo.jpeg";
import mauricioPicture from "../../images/foto_mauriccio.jpeg";
import pedroPicture from "../../images/foto_pedro.jpeg";

import { DevCard } from "../../components/devCard/devCard";

import "./aboutUs.css";

export default function AboutUs() {
    return (
        <>
            <div className="backgroundAboutUS">
                <img src={background} />
            </div>
            <div className="aboutUsContent">
                <div className="firstContent">
                    <img src={logo} />
                    <p>Somos cinco alunos da Escola Técnica Estadual de Hortolândia (ETEC), unidos para desenvolver nosso Trabalho de Conclusão de Curso (TCC)
                        em Desenvolvimento de Sistemas. Nosso objetivo é aplicar na prática os conhecimentos adquiridos ao longo do curso, criando uma solução
                        inovadora e funcional.Para entender melhor a proposta do projeto, acesse a tela “Início”, onde explicamos os detalhes, incluindo o
                        problema que buscamos resolver, nossa abordagem e as tecnologias utilizadas. Abaixo, apresentamos nossa equipe, destacando o papel de
                        cada integrante no desenvolvimento do projeto.</p>
                </div>
                <div className="secondContent">
                    <DevCard
                        image={andrePicture}
                        name="André Dantas"
                        functions="Front-End Developer"
                        description="Responsável pela programação, desenvolvimento e toda parte de códigos do projeto, principalmente."
                        linkInstagram="https://www.instagram.com/andre.sdantas/?hl=br"
                        linkLinkedin="https://www.linkedin.com/in/andre-luis-sousa-dantas/"
                        linkGitHub="https://github.com/andreluiisdantas"
                    />

                    <DevCard
                        image={julioPicture}
                        name="Julio Monteiro"
                        functions="Front-End Developer"
                        description="Responsável pelas pesquisas para melhoria da acessibilidade do site e incluir a localização na tela de academias parceiras."
                        linkInstagram="https://www.instagram.com/juliomonteiiro/?hl=br"
                        linkLinkedin="https://www.linkedin.com/in/julio-alexsandro-monteiro-da-silva-294b25248/"
                        linkGitHub="https://github.com/juliomonteiiro"
                    />

                    <DevCard
                        image={leoPicture}
                        name="Leonardo Albergoni Viana"
                        functions="Full-Stack Developer"
                        description="Responsável pela parte de Banco de dados, armazenamento de informações e codificação de Back-End."
                        linkInstagram="https://www.instagram.com/lleo_1206/?hl=br"
                        linkLinkedin="https://www.linkedin.com/in/leonardo-albergoni-viana-55b81929a/"
                        linkGitHub="https://github.com/Leochin1206"
                    />

                    <DevCard
                        image={mauricioPicture}
                        name="Mauriccio Pazetti"
                        functions="Designer"
                        description="Responsável por toda parte escrita e teórica do projeto, desenvolvedor do Design do site, criador dos conteúdos no Instagram do Inclusive Gym."
                        linkInstagram="https://www.instagram.com/paze77_mp/?hl=br"
                        linkLinkedin=""
                        linkGitHub=""
                    />

                    <DevCard
                        image={pedroPicture}
                        name="Pedro Pereira"
                        functions="Front-End Developer"
                        description="Responsável pelas pesquisas de academias que possuem acessibilidade e fazer a tela de academias parceiras."
                        linkInstagram="https://www.instagram.com/mvpedrx/?hl=br"
                        linkLinkedin="https://www.linkedin.com/in/pedro-henrique-pereira-790288283/"
                        linkGitHub="https://github.com/pedroohenriquee"
                    />

                </div>
            </div>
        </>
    );
}