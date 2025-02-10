/* NAVBAR */
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

/* Confirmação da senha */
document.getElementById('enviarButton').addEventListener('click', function(event) {
    // Evite o envio do formulário por padrão
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var nome_estabelecimento = document.getElementById('nome-estabelecimento').value;
    var endereco = document.getElementById('endereco').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;
    var inclusivo = document.getElementById('inclusivo').value;

    var camposVazios = [];

    // Verifique se cada campo está em branco e adicione-o à lista de campos vazios
    if (nome === '') {
        camposVazios.push('Nome');
    }
    if (email === '') {
        camposVazios.push('Email');
    }
    if (senha === '') {
        camposVazios.push('Senha');
    }
    if (confirmarSenha === '') {
        camposVazios.push('Confirmar Senha');
    }
    if (nome_estabelecimento === '') {
        camposVazios.push('Nome Estabelecimento');
    }
    if (endereco === '') {
        camposVazios.push('Endereço');
    }
    if (cpf === '') {
        camposVazios.push('CPF');
    }
    if (cnpj === '') {
        camposVazios.push('CNPJ');
    }
    if (inclusivo === '') {
        camposVazios.push('Inclusividade da Academia');
    }

    if (camposVazios.length > 0) {
        alert('Por favor, preencha os seguintes campos: ' + camposVazios.join(', '));
    } else if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, digite as senhas novamente.');
    } else {
        alert('Cadastro efetuado com sucesso!');
        document.getElementById('seuFormulario').submit();
    }
});
