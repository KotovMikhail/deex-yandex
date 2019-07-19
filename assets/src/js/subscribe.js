var subscribeBlock = document.querySelector('.main-subscribe-block');
var btnClose = document.querySelector('.close-btn');
var subscribeMail = subscribeBlock.querySelector('.subscribe__input');
var subscrForm = subscribeBlock.querySelector('.subscribe__form');


subscribeMail.addEventListener('invalid', function (evt) {
  if (subscribeMail.validity.patternMismatch) {
    subscribeMail.setCustomValidity('Please enter a valid email address.');
  } else if (subscribeMail.validity.valueMissing) {
    subscribeMail.setCustomValidity('Required field');
  } else {
    subscribeMail.setCustomValidity('');
  }
});

var readyLoad = function () {
  setTimeout(function () {
    subscribeBlock.classList.add('is-subscribe-open');
  }, 10000)
};

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  subscribeBlock.classList.remove('is-subscribe-open');
});

subscrForm.addEventListener('submit', function (evt) {





});

document.addEventListener("DOMContentLoaded", readyLoad);


