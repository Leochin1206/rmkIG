<?php
include('conexao.php');

// Recupere os dados do formulário

$nome = $_POST["nome"];
$email = $_POST["email"];
$dataNasc = $_POST["dataNasc"];
$senha = $_POST["senha"];
$confirmaSenha = $_POST["confirmarSenha"];

// Inicialize um array para rastrear campos duplicados

$camposDuplicados = [];

// Verifique se a senha e a confirmação de senha são iguais

if ($senha !== $confirmaSenha) {
    echo "A senha e a confirmação de senha não coincidem. Por favor, verifique.";
} else {

    // Verifique se o nome já existe na base de dados

    $verificarNome = $conexao->prepare(
        "SELECT COUNT(*) AS total FROM cadastro WHERE nome_usuario = :nome"
    );

    $verificarNome->bindParam(':nome', $nome);
    $verificarNome->execute();
    $resultNome = $verificarNome->fetch(PDO::FETCH_ASSOC);

    if ($resultNome['total'] > 0) {
        $camposDuplicados[] = "Nome";
    }

    // Verifique se o email já existe na base de dados

    $verificarEmail = $conexao->prepare(
        "SELECT COUNT(*) AS total FROM cadastro WHERE email_usuario = :email"
    );

    $verificarEmail->bindParam(':email', $email);
    $verificarEmail->execute();
    $resultEmail = $verificarEmail->fetch(PDO::FETCH_ASSOC);

    if ($resultEmail['total'] > 0) {
        $camposDuplicados[] = "Email";
    }

    if (!empty($camposDuplicados)) {
        $mensagemErro = "Os seguintes campos já estão cadastrados na base de dados: " . implode(", ", $camposDuplicados);
        echo $mensagemErro;
    } else {

        // Prepare a instrução SQL para inserção

        $inserirInclusivegym = $conexao->prepare(
            "INSERT INTO cadastro (nome_usuario, email_usuario, datanasc_usuario, senha_usuario, confirmsenha_usuario) 
            VALUES (:nome, :email, :dataNasc, :senha, :confirmarSenha)"
        );

        // Associe os valores aos parâmetros da instrução

        $inserirInclusivegym->bindParam(':nome', $nome);
        $inserirInclusivegym->bindParam(':email', $email);
        $inserirInclusivegym->bindParam(':dataNasc', $dataNasc);
        $inserirInclusivegym->bindParam(':senha', $senha);
        $inserirInclusivegym->bindParam(':confirmarSenha', $confirmaSenha);

        // Execute a instrução para inserir os dados

        if ($inserirInclusivegym->execute()) {

            // Inserção bem-sucedida, exibir tela de sucesso
            ?>
        
            <!DOCTYPE html>
            <html lang="en">
            <head>

                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cadastro Bem-Sucedido</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">

                <style>
                    body {
                        background-color: #84ADAF; 
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: 'Poppins', sans-serif;
                    }

                    .mensagem {
                        color: #043A57;
                        font-weight: 700;
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 20px; /* Espaçamento abaixo da mensagem */
                    }

                    .botao-voltar {
                        background-color: #Cor do botao; 
                        color: white;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: block;
                    }
                </style>
            </head>

            <body>

                <div class="mensagem">Você foi cadastrado com sucesso!</div>

                <a href="/INCLUSIVE-GYM/index.html" class="botao-voltar">Voltar para o Início</a>

            </body>

            </html>
        
            <?php

        } 

        else {

            // Exibir mensagem de erro

            echo "Ocorreu um erro ao cadastrar. Por favor, tente novamente.";

        }
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"]; 
    $senha = $_POST["senha"];

    $buscarUsuario = $conexao->prepare("SELECT * FROM cadastro WHERE email_usuario = :email");
    $buscarUsuario->bindParam(':email', $email);
    $buscarUsuario->execute();
    $usuario = $buscarUsuario->fetch(PDO::FETCH_ASSOC);

    $buscarUsuario = $conexao->prepare("SELECT email_usuario, senha_usuario FROM cadastro WHERE email_usuario = :email");

}

?>