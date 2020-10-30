const buttonContacts = document.querySelector(".button-contacts");
const loginPopup = document.querySelector(".modal-letter");
const buttonClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginName = loginPopup.querySelector(".login-icon-name");
const loginEmail = loginPopup.querySelector(".login-icon-email");

const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const buttonCloseMap = mapPopup.querySelector(".modal-close");

// const basketButton = document.querySelectorAll(".buy");
// const basketPopup = document.querySelector(".modal-basket");
// const buttonCloseBasket = basketPopup.querySelector(".modal-close");

//modal-letter

buttonContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginName.focus();
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
	if (!loginName.value || !loginEmail) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
   } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

//modal-map

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

buttonCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//modal-basket

basketButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
});

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





