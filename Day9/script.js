const box = document.querySelector(".box");

box.addEventListener("click", () => {
  if (box.classList.contains("boxClicked")) {
    box.classList.remove("boxClicked");
  } else {
    box.classList.add("boxClicked");
  }
});
