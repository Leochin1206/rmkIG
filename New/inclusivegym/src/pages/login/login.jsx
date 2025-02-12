import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Senha:", password);
    };

    return (
        <div className="screen">
            <div className="containerLogin">
                <div className="infosLogin">
                    <img src={logo} alt="Logo" />
                    <h1>Login</h1>
                    <Link to="/registration"><h3>Cadastrar</h3></Link>
                    <h6>Caso não tenha conta</h6>
                </div>
                <div className="inputLogin">
                    <h1>Bem-vindo de volta</h1>
                    <p>Preencha seus dados</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Insira seu E-mail" 
                            required
                        />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Insira sua Senha" 
                            required
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
