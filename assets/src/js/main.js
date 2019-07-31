var submit = document.querySelector('.form__submit');
var email = document.querySelector('.form__input--mail');
var form = document.querySelector('.form');
var URL = 'https://pp.deex.exchange/verify/request_service_info';

// var subscrURL = 'https://pp.deex.exchange/verify/request_service_info';
// var subscrURL = 'https://api-test.presale-deex.exchange/verify/request_service_info';


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

  var xhr;

  if (window.XMLHttpRequest) {
    //Gecko-совместимые браузеры, Safari, Konqueror
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    //Internet explorer
    try {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (CatchException) {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
  }

  var serialize = function (obj) {
    return Object.keys(obj).reduce(function (a, k) {
      a.push(k + "=" + encodeURIComponent(obj[k]));
      return a;
    }, []).join("&");
  };

  xhr.open('POST', URL);

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      console.log(xhr.response);

      modalSuccessWrap.style.display = 'flex';

      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          modalSuccessWrap.style.display = 'none';
        }
      });

      document.addEventListener('click', function (evt) {
        modalSuccessWrap.style.display = 'none';
      });

      modalSuccessClose.addEventListener('click', function () {
        modalSuccessWrap.style.display = 'none';
      });
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


  xhr.responseType = 'json';
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
