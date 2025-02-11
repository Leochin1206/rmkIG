import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import "./login.css";

export default function Login() {
    return (
        <div className="screen">
            <div className="containerLogin">
                <div className="infosLogin">
                    <img src={logo} />
                    <h1>Login</h1>
                    <Link to="/registration"><h3>Cadastrar</h3></Link>
                    <h6>Caso não tenha conta</h6>
                </div>
                <div className="inputLogin">
                    <h1>Bem-vindo de volta</h1>
                    <p>Preencha seus dados</p>
                    <input placeholder="Insira seu E-mail"/>
                    <input placeholder="Insira sua Senha"/>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    );
}