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

function popupFormOpen() {
  event.preventDefault();
  popupForm.classList.add('popup-form--active');
}

function popupClose() {
	popupForm.classList.remove('popup-form--active');
	popupMap.classList.remove('popup-map--active');
}

function keydownEsc() {
  if(event.keyCode === ENTER_KEY_CODE) {
    popupClose();
	}
}

btnClosePopupMap.addEventListener('click', popupClose);
btnOpenPopupMap.addEventListener('click', popupMapOpen);
btnClosePopupForm.addEventListener('click', popupClose);
btnOpenPopupForm.addEventListener('click', popupFormOpen);
window.addEventListener('keydown', keydownEsc);
