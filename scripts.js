document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const list = document.getElementById('navList');
  if (toggle && list) {
    toggle.addEventListener('click', () => list.classList.toggle('open'));
    list.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => list.classList.remove('open'))
    );
  }
});
