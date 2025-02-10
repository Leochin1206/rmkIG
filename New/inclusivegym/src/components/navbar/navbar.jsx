import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"

export default function Navbar(){
    return(
        <>
            <nav>
                <div className="navbar">
                    <div className="logoNavBar">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="linksNavBar">
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/partnerGyms"><p>Academias parceiras</p></Link>
                        <Link to="/aboutUs"><p>Sobre-Nós</p></Link>
                        <Link to="/contact"><p>Contato</p></Link>
                        <Link to="/login"><p className="login">Login</p></Link>
                    </div>
                </div>
            </nav>
        </>
    );
}