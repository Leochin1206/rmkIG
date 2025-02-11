import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import "./registration.css";

export default function Registration(){
    return(
        <div className="screen">
            <div className="containerRegistration">
                <div className="infosRegistration">
                    <img src={logo} />
                    <h1>Cadastro</h1>
                    <Link to="/login"><h3>Login</h3></Link>
                    <h6>Já possui uma conta</h6>
                </div>
                <div className="inputRegistration">
                    <h1>Crie sua conta de Usuário</h1>
                    <p>Preencha seus dados</p>
                    <input placeholder="Insira seu Nome"/>
                    <input placeholder="Insira seu E-mail"/>
                    <input type="date"/>
                    <input placeholder="Insira sua Senha"/>
                    <input placeholder="Confirme a sua Senha"/>
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    );
}