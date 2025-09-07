// const { duplexPair } = require("stream");

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Logos move
const logos = document.querySelector(".rotating-logos__track").cloneNode(true)
document.querySelector(".rotating-logos").appendChild(logos)

// Function to toggle plans
function switchPricing() {
  const checkbox = document.getElementById("pricing-toggle-checkbox");
  const monthlyPrices = document.querySelectorAll(".monthly-price");
  const yearlyPrices = document.querySelectorAll(".yearly-price");
  const yearlyDiscount =document.querySelector(".save-percentage");

  if(checkbox.checked) {
    monthlyPrices.forEach((price) => price.classList.add("hidden"))
    yearlyPrices.forEach((price) => price.classList.remove("hidden"))
    yearlyDiscount.style.display = "inline";
  } else {
    monthlyPrices.forEach((price) => price.classList.remove("hidden"))
    yearlyPrices.forEach((price) => price.classList.add("hidden"))
    yearlyDiscount.style.display = "none";
  }
}

// FAQ


window.addEventListener("load", () => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

