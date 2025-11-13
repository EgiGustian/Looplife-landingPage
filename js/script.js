// toggle class active menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
}

// toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// ketika search di klik
document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Klik di luar elemet
const menuNav = document.querySelector('#menu');
const searchBtn = document.querySelector('#search-btn');

document.addEventListener('click', function(e) {
  if(!menuNav.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
})
