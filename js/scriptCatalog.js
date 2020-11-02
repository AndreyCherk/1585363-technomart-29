

const basketButton = document.querySelectorAll(".buy");
const basketPopup = document.querySelector(".modal-basket");
const buttonCloseBasket = basketPopup.querySelector(".modal-close");
const basketOrder = document.querySelector(".button-order")

//modal-basket

for (let i = 0; i < basketButton.length; i++) {
  basketButton[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
  basketOrder.focus();
});
}

buttonCloseBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});