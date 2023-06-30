"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.749383, 37.600521],
    zoom: 12,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });
  var myPlacemark = new ymaps.Placemark([55.769383, 37.638521], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/point.svg',
    iconImageSize: [15, 15],
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(myPlacemark);
  myPlacemark.events.add('click', function () {
    document.querySelector('.map__info').classList.add('map__info--active');
  });
}
;
var closeMap = document.querySelector('.map__btn');
var openMap = document.querySelector('.map__marker');
closeMap.addEventListener('click', function () {
  document.querySelector('.map__info').classList.remove('map__info--active');
});
openMap.addEventListener('click', function () {
  document.querySelector('.map__info').classList.add('map__info--active');
});
var search = document.querySelector('.header__search');
var searchBlock = document.querySelector('.header__search-block-d');
var serchInput = document.querySelector('.header__search-input');
var searchClose = document.querySelector('.header__search-close');
search.addEventListener('click', function () {
  searchBlock.classList.add('header__search-block-d--active');
});
searchClose.addEventListener('click', function () {
  searchBlock.classList.remove('header__search-block-d--active');
});
serchInput.addEventListener('input', function () {
  if (serchInput.value !== '') {
    serchInput.classList.add('header__search-input--active');
  } else {
    serchInput.classList.remove('header__search-input--active');
  }
});
var aboutValidation = new JustValidate('.about__form', {
  errorLabelStyle: {
    color: '#F06666'
  }
});
var contacsValidation = new JustValidate('.contacts__form', {
  errorLabelStyle: {
    color: '#F06666'
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var _ref;
  aboutValidation.addField('.about__input', [{
    rule: 'required',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }]);
  contacsValidation.addField('.input-name', [(_ref = {
    rule: 'required'
  }, _defineProperty(_ref, "rule", 'customRegexp'), _defineProperty(_ref, "value", /[a-z]/gi), _defineProperty(_ref, "value", /[а-я]/gi), _defineProperty(_ref, "errorMessage", "Недопустимый формат"), _ref)]).addField('.input-mail', [{
    rule: 'required',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }]);
});
var burgerOpen = document.querySelector('.burger-open');
var burgerClose = document.querySelector('.burger-close');
var burger = document.querySelector('.burger');
var burgerLink = document.querySelectorAll('.nav__link');
burgerOpen.addEventListener('click', function () {
  burger.classList.add('burger--active');
  // document.body.classList.add("stop-scroll")
});

burgerClose.addEventListener('click', function () {
  burger.classList.remove('burger--active');
  // document.body.classList.remove("stop-scroll")
});

burgerLink.forEach(function (e) {
  e.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    // document.body.classList.remove("stop-scroll")
  });
});