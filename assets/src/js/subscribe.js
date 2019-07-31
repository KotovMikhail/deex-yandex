var subscribeBlock = document.querySelector('.main-subscribe-block');
var btnClose = document.querySelector('.close-btn');
var subscribeMail = subscribeBlock.querySelector('.subscribe__input');
var subscrForm = subscribeBlock.querySelector('.subscribe__form');
var modalSuccessWrap = document.querySelector('.modal__success-wrap');
var modalSuccessClose = document.querySelector('.modal__success-close');
var subscrURL = 'https://pp.deex.exchange/verify/request_service_info';

// var subscrURL = 'https://pp.deex.exchange/verify/request_service_info';
// var subscrURL = 'https://api-test.presale-deex.exchange/verify/request_service_info';

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

var uploadSubscr = function (obj) {
  var xhr = new XMLHttpRequest();

  var serialize = function (obj) {
    return Object.keys(obj).reduce(function (a, k) {
      a.push(k + "=" + encodeURIComponent(obj[k]));
      return a;
    }, []).join("&");
  };


  xhr.open('POST', subscrURL);

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

subscrForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  data.email = subscribeMail.value;
  uploadSubscr(data);
});



document.addEventListener("DOMContentLoaded", readyLoad);
