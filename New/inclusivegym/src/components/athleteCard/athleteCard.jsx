import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { InstagramLogo, Star } from "@phosphor-icons/react";

import "./athleteCard.css";

AthleteCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    achievement1: PropTypes.string.isRequired,
    achievement2: PropTypes.string.isRequired,
    achievement3: PropTypes.string.isRequired,
    linkInstagram: PropTypes.string.isRequired,
    nameInstagram: PropTypes.string.isRequired
};

export function AthleteCard({ name, image, description, achievement1, achievement2, achievement3, linkInstagram, nameInstagram }) {
    return (
        <>
            <div className="cardAthlete">
                <h1>{name}</h1>
                <img src={image} alt="Imagem do atleta" className="imgAthlete"/>
                <div className="containerDescription"><p>{description}</p></div>
                <div className="mainAchievements"><h2>Principais Conquistas</h2></div>
                <div className="achievements"><p><Star size={15} color="#fff" /> {achievement1}</p></div>
                <div className="achievements"><p><Star size={15} color="#fff" /> {achievement2}</p></div>
                <div className="achievements"><p><Star size={15} color="#fff" /> {achievement3}</p></div>
                <div className="instagram"><Link to={linkInstagram}>{nameInstagram}</Link></div>
            </div>
        </>
    );
}
