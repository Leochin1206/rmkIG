import { Link } from "react-router-dom";

import { AthleteCard } from "../../components/athleteCard/athleteCard";

import anaBrito from "../../images/CARROSSEL ANA BRITO.jpeg";
import guilhermeMaia from "../../images/CARROSSEL GUILHERME.jpeg"
import wendellBelarmino from "../../images/CARROSSEL WENDELL.jpeg"
import backgroundImage from "../../images/apresentacao.jpg"
import panobiancoLogo from "../../images/panobiancoLogo.png"
import skyfitLogo from "../../images/skyfitLogo.png"
import smartfitLogo from "../../images/smartfitLogo.png"
import logo from "../../images/logo.png"

import "./home.css";

export default function Home() {
    return (
        <>
            <div className="mainContainer">
                <div className="overlay">
                    <h1>Bem-vindo ao Inclusive Gym</h1>
                    <p>O Inclusive Gym, representa um esforço tecnológico notável na busca pela igualdade
                        de oportunidades no esporte, projetado para pessoas com deficiência visual.</p>
                    <div className="buttonsOverlay">
                        <Link to="/aboutUs"><p>Sobre Nós</p></Link>
                    </div>
                </div>
                <img src={backgroundImage} alt="Background Image" className="backgroundImage" />
            </div>
            <div className="cads">
                <AthleteCard
                    name="Ana Brito"
                    image={anaBrito}
                    description="Tem baixa visão devido ao albinismo. Radicada do Rio de Janeiro, conheceu o 
                    goalball na Educação Física no Instituto Benjamin Constant e começou a praticar a modalidade 
                    em alto rendimento em 2014. Primeira convocação para a Seleção em 2016."
                    achievement1="Ouro no Campeonato das Américas 2022"
                    achievement2="Ouro nos Jogos Parapan-Americanos Lima 2019"
                    achievement3="Bronze no Mundial de Goalball Malmö 2018"
                    linkInstagram="https://www.instagram.com/anagabrielybrito/?hl=br"
                    nameInstagram="@anagabrielybrito"
                />

                <AthleteCard
                    name="Guilherme Maia"
                    image={guilhermeMaia}
                    description="Guilherme Maia tem deficiência auditiva bilateral profunda. 
                    Estudou em escolas de ouvintes e especializadas, superando desafios na 
                    comunicação e no aprendizado para desenvolver suas habilidades."
                    achievement1="Tricampeão santista – 2008 a 2011 (ouvintes)"
                    achievement2="Bicampeão paulista – 2008 e 2011 (ouvintes)"
                    achievement3="Mundial de surdos em Coimbra-Portugal – 2011, 3 medalhas (2 pratas e 1 bronze)"
                    linkInstagram="https://www.instagram.com/guimaia89/?hl=br"
                    nameInstagram="@guimaia89"
                />

                <AthleteCard
                    name="Wendell Belarmino"
                    image={wendellBelarmino}
                    description="Wendell, atleta de natação, tem glaucoma congênito e passou 
                    por dez transplantes de córnea. A perda de visão foi gradativa, e em 2019 
                    foi reclassificado da classe S12 para S11, pois já possuía apenas 3% de 
                    resíduo visual, enfrentando novos desafios na carreira."
                    achievement1="49 pontos no Mundial de Londres 2019"
                    achievement2="Bronze nos 100m borboleta nos Jogos Paralímpicos de Tóquio 2020"
                    achievement3="Prata nos 400m livre nos Jogos Parapan-Americanos de Lima 2019"
                    linkInstagram="https://www.instagram.com/wendell_belarmino/?hl=br"
                    nameInstagram="@wendell_belarmino"
                />
            </div>
            <div className="gyms">
                <div className="gym">
                    <h3>Panobianco</h3>
                    <img src={panobiancoLogo} alt="panobianco Logo"/>
                </div>
                <div className="gym">
                    <h3>Sky Fit</h3>
                    <img src={skyfitLogo} alt="skyfit Logo"/>
                </div>
                <div className="gym">
                    <h3>Smart Fit</h3>
                    <img src={smartfitLogo} alt="smartfit Logo" className="smartfitLogo"/> 
                </div>
                <div className="gym">
                    <h3>Outras Opções</h3>
                    <img src={logo} alt="outras opções Logo" className="otheroptionsLogo"/>
                </div>
            </div>
        </>
    );
}