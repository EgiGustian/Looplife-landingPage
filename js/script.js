const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingCart = document.querySelector(".shopping-cart");

const buttonPanelMappings = [
  { btn: "#menu", panel: navbarNav },
  { btn: "#search-btn", panel: searchForm, focus: searchBox },
  { btn: "#shopping-cart-btn", panel: shoppingCart },
];

buttonPanelMappings.forEach(({ btn, panel, focus }) => {
  const el = document.querySelector(btn);
  if (!el || !panel) return;
  el.addEventListener("click", (e) => {
    panel.classList.toggle("active");
    if (focus) focus.focus();
    e.preventDefault();
  });
});

// Klik di luar elemet
const menuNav = document.querySelector("#menu");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#shopping-cart-btn");

const targets = [
  { trigger: menuNav, panel: navbarNav },
  { trigger: searchBtn, panel: searchForm },
  { trigger: cartBtn, panel: shoppingCart },
];

document.addEventListener("click", (e) => {
  targets.forEach(({ trigger, panel }) => {
    if (!trigger.contains(e.target) && !panel.contains(e.target)) {
      panel.classList.remove("active");
    }
  });
});

// Modal box
const itemDetails = document.querySelector("#item-detail-modal");
const itemDetailBtns = document.querySelectorAll(".barang-card");

itemDetailBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetails.style.display = "flex";
    e.preventDefault();
  });
});

// close modal
document.querySelector(".modal .close-icon").addEventListener("click", (e) => {
  itemDetails.style.display = "none";
  e.preventDefault();
});

// klik di luar modal
window.addEventListener("click", (e) => {
  if (e.target === itemDetails) {
    itemDetails.style.display = "none";
  }
});

// const navbarNav = document.querySelector('.navbar-nav');
// // ketika menu di klik
// document.querySelector('#menu').onclick = (e) => {
//   navbarNav.classList.toggle('active');
//   e.preventDefault();
// }

// // toggle class active search form
// const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');
// // ketika search di klik
// document.querySelector('#search-btn').onclick = (e) => {
//   searchForm.classList.toggle('active');
//   searchBox.focus();
//   e.preventDefault();
// }

// // toggle class active shopping cart
// const shoppingCart = document.querySelector('.shopping-cart');
// // ketika cart di klik
// document.querySelector('#shopping-cart-btn').onclick = (e) => {
//   shoppingCart.classList.toggle('active');
//   e.preventDefault();
// }

// // Klik di luar elemet
// const menuNav = document.querySelector('#menu');
// const searchBtn = document.querySelector('#search-btn');
// const cartBtn = document.querySelector('#shopping-cart-btn');

// document.addEventListener('click', function(e) {
//   if(!menuNav.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }
//   if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
//     searchForm.classList.remove('active');
//   }
//   if(!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
//     shoppingCart.classList.remove('active');
//   }
// })
