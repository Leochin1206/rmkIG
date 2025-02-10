<?php
include('conexao.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"]; 
    $senha = $_POST["senha"];

    $buscarUsuario = $conexao->prepare("SELECT * FROM cadastro WHERE email_usuario = :email");
    $buscarUsuario->bindParam(':email', $email);
    $buscarUsuario->execute();
    $usuario = $buscarUsuario->fetch(PDO::FETCH_ASSOC);

    $buscarUsuario = $conexao->prepare("SELECT email_usuario, senha_usuario FROM cadastro WHERE email_usuario = :email");

// Altere o código para acessar as colunas corretas
if ($usuario) {
    // Se o usuário existe, verifique a senha
    if ($senha == $usuario['senha_usuario']) {
        // Senha correta, login bem-sucedido
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Bem-Sucedido</title>
            <style>
                /* Seu estilo para a tela de sucesso de login aqui */
            </style>
        </head>
        <body>
            <div class="mensagem">Login bem-sucedido!</div>
        </body>
        </html>
        <?php
    } else {
        // Senha incorreta
        echo "Senha incorreta. Tente novamente.";
    }
} else {
    // Usuário não encontrado. Por favor, verifique o email.
    echo "Usuário não encontrado. Por favor, verifique o email.";
}

// Verifique se o array $usuario não está vazio
if (!$usuario) {
    // O usuário não foi encontrado
    echo "Usuário não encontrado. Por favor, verifique o email.";
}
}
?>