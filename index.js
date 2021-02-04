window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  var headerText = document.querySelector(".logo");
  window.scrollY > 0? headerText.innerHTML = "Given" : headerText.innerHTML = "Portfolio";
  
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

document.querySelector(".toggle").addEventListener("click", toggleMenu);
