// Espera o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

  // Pega os elementos que vou usar
  var body        = document.body;
  var themeToggle = document.getElementById('themeToggle');
  var themeIcon   = document.getElementById('themeIcon');
  var hamburger   = document.getElementById('hamburger');
  var navLinks    = document.getElementById('navLinks');

  // Verifica se tem tema salvo, se não usa dark por padrão
  var temaSalvo = localStorage.getItem('tema') || 'dark';
  aplicarTema(temaSalvo);

  // Clique no botão de tema
  themeToggle.addEventListener('click', function () {
    var atual = body.classList.contains('light') ? 'light' : 'dark';
    var novo  = atual === 'dark' ? 'light' : 'dark';
    aplicarTema(novo);
    localStorage.setItem('tema', novo);
  });

  // Aplica o tema no body e troca o ícone
  function aplicarTema(tema) {
    if (tema === 'light') {
      body.classList.remove('dark');
      body.classList.add('light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
  }

  // Abre/fecha o menu no mobile
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    var aberto = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha o menu quando clica em um link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

});
