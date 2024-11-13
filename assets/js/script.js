// JavaScript for Header and Search Bar Functionality

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const navToggler = document.querySelector("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const searchTogglers = document.querySelectorAll("[data-search-toggler]");
    const searchBar = document.querySelector("[data-search-bar]");
    const overlay = document.querySelector("[data-overlay]");
  
    // Toggle mobile navigation menu
    if (navToggler && navbar) {
      navToggler.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
        navToggler.classList.toggle("active");
      });
    }
  
    // Toggle search bar and overlay
    searchTogglers.forEach(toggler => {
      toggler.addEventListener("click", () => {
        searchBar.classList.toggle("active");
        overlay.classList.toggle("active");
      });
    });
  
    // Close search bar when overlay is clicked
    if (overlay) {
      overlay.addEventListener("click", () => {
        searchBar.classList.remove("active");
        overlay.classList.remove("active");
      });
    }
  });
  