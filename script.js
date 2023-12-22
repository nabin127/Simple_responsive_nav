let hamB = document.querySelector(".hamB");
let cancel = document.querySelector(".cancel");
let cross_menu = document.querySelector(".cross_menu");
let nav = document.querySelector("nav");

hamB.addEventListener("click", () => {
  cross_menu.style.display = "block";
  nav.style.backgroundColor = "green";
  hamB.style.display = "none";
  if ((hamB.style.display = "none")) {
    cancel.style.display = "block";
  }
});
cancel.addEventListener("click", () => {
  cross_menu.style.display = "none";
  nav.style.backgroundColor = "black";
  cancel.style.display = "none";
  if ((cancel.style.display = "none")) {
    hamB.style.display = "block";
  }
});
