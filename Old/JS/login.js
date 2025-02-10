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
    var date = document.getElementById('date').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    var camposVazios = [];

    // Verifique se cada campo está em branco e adicione-o à lista de campos vazios
    if (nome === '') {
        camposVazios.push('Nome');
    }
    if (email === '') {
        camposVazios.push('Email');
    }
    if (date === '') {
        camposVazios.push('Data de Nascimento');
    }
    if (senha === '') {
        camposVazios.push('Senha');
    }
    if (confirmarSenha === '') {
        camposVazios.push('Confirmar Senha');
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
