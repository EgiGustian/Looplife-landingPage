// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
const menuNav = document.querySelector('#menu');

document.addEventListener('click', function(e) {
  if(!menuNav.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
