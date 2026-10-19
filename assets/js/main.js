// Казим Давидов — сайт. Минимальный JS без зависимостей.

document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // Текущий год в футере
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Форма обратной связи → почтовый клиент (без сервера)
  var form = document.querySelector('.js-mailto-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || '';
      var contact = (form.querySelector('[name="contact"]') || {}).value || '';
      var message = (form.querySelector('[name="message"]') || {}).value || '';
      var to = form.getAttribute('data-mailto');
      var subject = encodeURIComponent('Обращение с сайта — ' + name);
      var body = encodeURIComponent(
        'Имя: ' + name + '\n' +
        'Контакт: ' + contact + '\n\n' +
        message
      );
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
});
