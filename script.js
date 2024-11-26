function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  

  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    hamburgerIcon.src = 'images/icon-hamburger.svg'; // Retorna ao ícone de hamburger
  } else {
    menu.style.display = 'block';
    hamburgerIcon.src = 'images/icon-close.svg'; // Altera para o ícone de "X"
  }
}

