import { Link } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";

import PropTypes from "prop-types";

import "./devCard.css";

DevCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    functions: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkInstagram: PropTypes.string.isRequired,
    linkLinkedin: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired
};

export function DevCard({image, name, functions, description, linkInstagram, linkLinkedin, linkGitHub }) {
    return (
    <>
        <div className="cardDev">
            <div className="infosDev">
                <img src={image}/>
                <div className="dataDev">
                    <h3>{name}</h3>
                    <h4>{functions}</h4>
                </div>
            </div>
            <div className="othersInformationsDev">
                <p>{description}</p>
                <div className="iconsSocialMedia">
                    <Link to={linkInstagram}><InstagramLogo size={32} color="#84ADAF"/></Link>
                    <Link to={linkLinkedin}><LinkedinLogo size={32} color="#84ADAF"/></Link>
                    <Link to={linkGitHub}><GithubLogo size={32} color="#84ADAF"/></Link>
                </div>
            </div>
        </div>
    </>
    );
}