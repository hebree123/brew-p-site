const aboutBtn = document.getElementById("aboutBtn");
const projectsBtn = document.getElementById("projectsBtn");
const projects = document.querySelector(".main-projects");
const aboutModal = document.querySelector(".about");
const main = document.querySelector(".main");
const backBtn = document.getElementById("backBtn");

aboutBtn.addEventListener("click", () => {
  event.preventDefault();
  aboutModal.style.display = "block";
  main.style.display = "none";
});

backBtn.addEventListener("click", () => {
  event.preventDefault();
  aboutModal.style.display = "none";
  main.style.display = "block";
});

projectsBtn.addEventListener("click", () => {
  event.preventDefault();
  projects.scrollIntoView({ behavior: "smooth" });
});
