'use strict';

var popupMap = document.querySelector('.popup-map');
var popupForm = document.querySelector('.popup-form');

var btnClosePopupMap = popupMap.querySelector('.btn-close');
var btnClosePopupForm = popupForm.querySelector('.btn-close');
var btnOpenPopupMap = document.querySelector('.contacts__map');
var btnOpenPopupForm = document.querySelector('.contacts__btn');

var ENTER_KEY_CODE = 27;

function popupMapOpen() {
  event.preventDefault();
  popupMap.classList.add('popup-map--active');
}
function popupMapClose() {
  popupMap.classList.remove('popup-map--active');
}
function popupFormOpen() {
  event.preventDefault();
  popupForm.classList.add('popup-form--active');
}
function popupFormClose() {
  popupForm.classList.remove('popup-form--active');
}
function keydownEsc() {
  if(event.keyCode === ENTER_KEY_CODE) {
    if(popupMap.classList.contains('popup-map--active')) {
      popupMap.classList.remove('popup-map--active');
    }
    if(popupForm.classList.contains('popup-form--active')) {
      popupForm.classList.remove('popup-form--active');
    }
  }
}

btnClosePopupMap.addEventListener('click', popupMapClose);
btnOpenPopupMap.addEventListener('click', popupMapOpen);
btnClosePopupForm.addEventListener('click', popupFormClose);
btnOpenPopupForm.addEventListener('click', popupFormOpen);
window.addEventListener('keydown', keydownEsc);
