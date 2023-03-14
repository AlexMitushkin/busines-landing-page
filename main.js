const popUp = document.getElementById("popup");


document.getElementById("popup__close").addEventListener("click", () => {
  popUp.classList.remove("active");
});

document.querySelectorAll(".popup__open").forEach((elem) => {
  elem.addEventListener("click", () => {
    popUp.classList.add("active");
  });
})


