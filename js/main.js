// handle menu
const menuBtn = document.querySelector(".mobile-menu .menu-btn");
const closeMenuBtn = document.querySelector(".mobile-menu .menu-close");
const menuLinksContainer = document.querySelector(".mobile-menu .links");
const menuLinks = document.querySelectorAll(".mobile-menu .links a");

const toggleClick = (showBtn, hideBtn) => {
  showBtn.classList.remove("hidden");
  hideBtn.classList.add("hidden");
  menuLinksContainer.classList.toggle("hidden");
};

menuLinks.forEach((link) => {
  link.addEventListener("click", () => toggleClick(menuBtn, closeMenuBtn));
});

menuBtn.addEventListener("click", () => toggleClick(closeMenuBtn, menuBtn));
closeMenuBtn.addEventListener("click", () =>
  toggleClick(menuBtn, closeMenuBtn)
);

window.addEventListener("resize", () => {
  if (window.innerWidth === 768) {
    // Reset everything to default
    toggleClick(menuBtn, closeMenuBtn);
    menuLinksContainer.classList.add("hidden");
  }
});
