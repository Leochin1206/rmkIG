import { useState } from "react";
import "./contact.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", name, "Email:", email, "Mensagem:", message);
        alert("Sua mensagem foi enviada com sucesso!");
    };

    return (
        <div className="screenContact">
            <div className="containerContact">
                <div className="titleContact">
                    <h1>Contato</h1>
                </div>
                <div className="contentContact">
                    <h4>Tem uma dúvida ou problema? Estamos aqui para ajudar!</h4>
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
                        <textarea 
                            className="textareaContact"
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="Insira sua dúvida ou solicitação" 
                            required 
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
