<?php
    try{
        
    // Configurações do banco de dados
    $host = 'localhost';  // Endereço do servidor do banco de dados
    $dbname = 'dbinclusivegym'; // Nome do banco de dados
    $usuario = 'root';      // Nome de usuário do banco de dados
    $senha = '';        // Senha do banco de dados


    // Cria uma instância da classe PDO para estabelecer a conexão
    $conexao = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $senha);

    // Define o modo de erro do PDO para Exception
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    } 
    
    catch (PDOException $e){
        //Em caso de erro, trata a exceção aqui
        echo 'Erro na conexão com o banco de dados: ' . $e->getMessage();
    }
?>
