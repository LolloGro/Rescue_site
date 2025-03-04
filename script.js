const open = document.querySelector(".menu");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  console.log("OK");
  modal.style.display = "block";

})

close.addEventListener("clock", () => {
  modal.style.display = "none";
})

