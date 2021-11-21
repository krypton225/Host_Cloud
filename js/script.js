window.addEventListener("scroll", function () {
  const navBar = document.querySelector("#navBar");
  navBar.classList.toggle("sticky-scroll", window.scrollY > 0);
});

function toggleMenu() {
  var toggle = document.querySelector(".toggle");
  toggle.classList.toggle("active");

  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
