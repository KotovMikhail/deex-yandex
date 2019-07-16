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

// var inputs = document.querySelectorAll('input:not([type="checkbox"])');
// var btnSubmit = document.querySelector(".form__submit");
// var btnCheck = document.querySelector(".form__input--confirm");
// var newInput = Array.from(inputs);

// function CustomValidation() {}

// CustomValidation.prototype = {
//   invalidities: [],

//   checkValidity: function() {
//     var validity = input.validity;
//     if (validity.patternMismatch) {
//       this.addInvalidity("This is wrong pattern for this field");
//     }
//   },

//   addInvalidity: function(message) {
//     this.invalidities.push(message);
//   },

//   getInvalidities: function() {
//     return this.invalidities.join(". \n");
//   }
// };

// btnSubmit.addEventListener("click", function(e) {
//   e.preventDefault();

//   var values = [];

//   if (btnCheck.checked === false) {

//   }

//     for (var i = 0; i < inputs.length; i++) {
//       var input = inputs[i];

//       if(input.value === '') {

//       }

//       values.push(input.value);
//     }


//   console.log(values);
// });
