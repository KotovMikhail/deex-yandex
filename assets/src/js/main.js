var submit = document.querySelector('.form__submit');
var email = document.querySelector('.form__input--mail');
var form = document.querySelector('.form');
var URL = 'http://192.168.10.50/verify/request_service_info';


email.addEventListener('invalid', function (evt) {
  if (email.validity.patternMismatch) {
    email.setCustomValidity('Please enter a valid email address.');
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('Required field');
  } else {
    email.setCustomValidity('');
  }
});

var data = {
  email: '',
  name: '',
  lang: 'en',
  service: 'deex_cash'
};

var upload = function (obj) {
  var xhr = new XMLHttpRequest();

  var serialize = function(obj)  {
    debugger;
    return Object.keys(obj).reduce(function (a, k) {
      a.push(k + "=" + encodeURIComponent(obj[k]));
      return a;
    }, []).join("&");
  };

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

  xhr.timeout = 10000;

  xhr.open('POST', URL);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.send(serialize({
    data: JSON.stringify(obj)
  }));
};

form.addEventListener('submit', function (evt) {

  evt.preventDefault();

  data.email = email.value;

  upload(data);

});





