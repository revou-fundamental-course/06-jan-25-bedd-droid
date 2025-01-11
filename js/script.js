// RESPONSIVE HEADER START
const menuIcon = document.getElementById("hamburger-icon");
const menuList = document.getElementById("menu-list");


menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
})
// RESPONSIVE HEADER END