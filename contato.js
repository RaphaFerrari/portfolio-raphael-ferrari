// Script do formulário de contato
// Valida os campos e simula o envio com um modal de confirmação

document.addEventListener('DOMContentLoaded', function () {

  var form      = document.getElementById('contactForm');
  var modal     = document.getElementById('modalSucesso');
  var fecharBtn = document.getElementById('fecharModal');

  // Campos do formulário
  var campoNome     = document.getElementById('nome');
  var campoEmail    = document.getElementById('email');
  var campoMensagem = document.getElementById('mensagem');

  // Spans onde aparecem as mensagens de erro
  var erroNome     = document.getElementById('erroNome');
  var erroEmail    = document.getElementById('erroEmail');
  var erroMensagem = document.getElementById('erroMensagem');

  // Quando o formulário é enviado
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // impede o recarregamento da página

    limparErros();

    if (validar()) {
      form.reset();
      modal.classList.remove('hidden');
    }
  });

  // Fecha o modal ao clicar no botão
  fecharBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
  });

  // Fecha o modal clicando fora da caixa
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Valida todos os campos e retorna true se estiver tudo ok
  function validar() {
    var ok = true;

    var nome = campoNome.value.trim();
    if (nome === '') {
      mostrarErro(campoNome, erroNome, 'Informe seu nome.');
      ok = false;
    } else if (nome.length < 3) {
      mostrarErro(campoNome, erroNome, 'Nome muito curto.');
      ok = false;
    }

    var email = campoEmail.value.trim();
    if (email === '') {
      mostrarErro(campoEmail, erroEmail, 'Informe seu e-mail.');
      ok = false;
    } else if (!emailValido(email)) {
      mostrarErro(campoEmail, erroEmail, 'E-mail inválido. Ex: usuario@dominio.com');
      ok = false;
    }

    var msg = campoMensagem.value.trim();
    if (msg === '') {
      mostrarErro(campoMensagem, erroMensagem, 'Escreva uma mensagem.');
      ok = false;
    } else if (msg.length < 10) {
      mostrarErro(campoMensagem, erroMensagem, 'Mensagem muito curta.');
      ok = false;
    }

    return ok;
  }

  // Verifica o formato do e-mail com regex
  function emailValido(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Marca o campo como erro e exibe a mensagem
  function mostrarErro(campo, span, msg) {
    campo.classList.add('input-error');
    span.textContent = msg;
  }

  // Remove todos os erros antes de revalidar
  function limparErros() {
    [campoNome, campoEmail, campoMensagem].forEach(function (c) {
      c.classList.remove('input-error');
    });
    erroNome.textContent     = '';
    erroEmail.textContent    = '';
    erroMensagem.textContent = '';
  }

  // Remove o erro do campo assim que o usuário começa a digitar
  campoNome.addEventListener('input', function () {
    campoNome.classList.remove('input-error');
    erroNome.textContent = '';
  });

  campoEmail.addEventListener('input', function () {
    campoEmail.classList.remove('input-error');
    erroEmail.textContent = '';
  });

  campoMensagem.addEventListener('input', function () {
    campoMensagem.classList.remove('input-error');
    erroMensagem.textContent = '';
  });

});
