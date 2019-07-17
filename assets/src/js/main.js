// input.validity = {
//   valid: false // Поле валидно
//   customError: false // Установленно специальное сообщение ошибки
//   patternMismatch: false // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
//   rangeOverflow: false // Значение превосходит атрибут max
//   rangeUnderflow: true // Значение меньше атрибута min
//   stepMismatch: true // Значение не соответствует указаному шагу
//   tooLong: false // Значение слишком длинное
//   tooShort: false // Значение слишком короткое
//   typeMismatch: false // Значение не соответствует указаному атрибуту type
//   valueMissing: false // Отсутствует обязательное значение
// };

var submit = document.querySelector('.form__submit');
var email = document.querySelector('.form__input--mail');
var form = document.querySelector('.form');
var URL = 'https://pp.deex.exchange/verify/store_email';


email.addEventListener('invalid', function (evt) {
  if (email.validity.patternMismatch) {
    email.setCustomValidity('Please enter a valid email address.');
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('Required field');
  } else {
    email.setCustomValidity('');
  }
});

var upload = function (data, onSucces) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    console.log('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    console.log('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000; // 10s

  xhr.open('POST', URL);
  xhr.send(data);
};

form.addEventListener('submit', function (evt) {

  upload(email.value, function (response) {
    console.log(email.value)
  });
  evt.preventDefault();
});
