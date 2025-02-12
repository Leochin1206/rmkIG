import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./registration.css";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        console.log("Nome:", name, "Email:", email, "Data de Nascimento:", date, "Senha:", password);
    };

    return (
        <div className="screen">
            <div className="containerRegistration">
                <div className="infosRegistration">
                    <img src={logo} alt="Logo" />
                    <h1>Cadastro</h1>
                    <Link to="/login"><h3>Login</h3></Link>
                    <h6>Já possui uma conta?</h6>
                </div>
                <div className="inputRegistration">
                    <h1>Crie sua conta de Usuário</h1>
                    <p>Preencha seus dados</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Insira seu Nome" 
                            required 
                        />
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Insira seu E-mail" 
                            required 
                        />
                        <input 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Insira sua Senha" 
                            required 
                        />
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            placeholder="Confirme a sua Senha" 
                            required 
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
