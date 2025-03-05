const open = document.querySelector(".menu");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () => {
  modal.style.display = "none";
})
