const buttonContacts = document.querySelector(".button-contacts");
const loginPopup = document.querySelector(".modal-letter");
const buttonClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginName = loginPopup.querySelector(".login-icon-name");
const loginEmail = loginPopup.querySelector(".login-icon-email");

const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const buttonCloseMap = mapPopup.querySelector(".modal-close");

const basketButton = document.querySelectorAll(".buy");
const basketPopup = document.querySelector(".modal-basket");
const buttonCloseBasket = basketPopup.querySelector(".modal-close");

const galleryItemOne = document.querySelector(".gallery-item-one")
const galleryItemTwo = document.querySelector(".gallery-item-two")
const galleryControlsOne = document.querySelector(".gallery-controls-one");
const galleryControlsTwo = document.querySelector(".gallery-controls-two");
const galleryScrollingRight = document.querySelector(".gallery-scrolling-right");
const galleryScrollingLeft = document.querySelector(".gallery-scrolling-left");

const serviceControlsButton = document.querySelectorAll(".service-controls-button");
const tabsBoxNone = document.querySelectorAll(".tabs-box-none");



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

for (let i = 0; i < basketButton.length; i++) {
  basketButton[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
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

//gallery

galleryControlsOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryControlsTwo.classList.remove("current-button");
  galleryControlsOne.classList.add("current-button");
  galleryItemTwo.classList.add("gallery-none");
  galleryItemOne.classList.remove("gallery-none");
});

galleryControlsTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryControlsTwo.classList.add("current-button");
  galleryControlsOne.classList.remove("current-button");
  galleryItemTwo.classList.remove("gallery-none");
  galleryItemOne.classList.add("gallery-none");
});

galleryScrollingRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryControlsTwo.classList.add("current-button");
  galleryControlsOne.classList.remove("current-button");
  galleryItemTwo.classList.remove("gallery-none");
  galleryItemOne.classList.add("gallery-none");
});

galleryScrollingLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryControlsTwo.classList.remove("current-button");
  galleryControlsOne.classList.add("current-button");
  galleryItemTwo.classList.add("gallery-none");
  galleryItemOne.classList.remove("gallery-none");
});


function serviceSlider(a,b) {
  for (let a = 0; a < serviceControlsButton.length; a++) {
   serviceControlsButton[a].addEventListener("click", function (b) {
    if (b.preventDefault(), !serviceControlsButton[a].classList.contains("service-active")) {
      for (let a = 0; a < serviceControlsButton.length; a++) {
        serviceControlsButton[a].classList.remove("service-active"), 
        tabsBoxNone[a].classList.remove("tabs-box-current");
      }
    } 

      serviceControlsButton[a].classList.add("service-active"),
      tabsBoxNone[a].classList.add("tabs-box-current");
    });
  } 
}

serviceSlider(serviceControlsButton, "service-active");
serviceSlider(tabsBoxNone, "tabs-box-current");






