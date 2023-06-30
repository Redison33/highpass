
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.749383,37.600521],
    zoom: 12,
    controls: []
  },
  {suppressMapOpenBlock: true});

  let myPlacemark = new ymaps.Placemark([55.769383,37.638521], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/point.svg',
        iconImageSize: [15, 15],
        iconImageOffset: [0, 0]
  });
   
  myMap.geoObjects.add(myPlacemark); 
  
    myPlacemark.events.add('click', function () {
        document.querySelector('.map__info').classList.add('map__info--active')
    })
};

let closeMap = document.querySelector('.map__btn')
let openMap = document.querySelector('.map__marker')

closeMap.addEventListener('click', function () {
    document.querySelector('.map__info').classList.remove('map__info--active')
})
openMap.addEventListener('click', function () {
    document.querySelector('.map__info').classList.add('map__info--active')
})



let search = document.querySelector('.header__search');
let searchBlock = document.querySelector('.header__search-block-d');
let serchInput = document.querySelector('.header__search-input');
let searchClose = document.querySelector('.header__search-close');

search.addEventListener('click', function () {
    searchBlock.classList.add('header__search-block-d--active')
})

searchClose.addEventListener('click', function () {
    searchBlock.classList.remove('header__search-block-d--active')
})

serchInput.addEventListener('input', function() {
    if (serchInput.value !== '' ) {
        serchInput.classList.add('header__search-input--active')
    }
    else {
        serchInput.classList.remove('header__search-input--active')
    }
})



const aboutValidation = new JustValidate('.about__form', {
    errorLabelStyle: {
      color:'#F06666'
    }
  });

  const contacsValidation = new JustValidate('.contacts__form', {
    errorLabelStyle: {
      color:'#F06666'
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    aboutValidation
        .addField('.about__input', [{
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'email',
            errorMessage: 'Недопустимый формат',
        }
        ])

    contacsValidation
        .addField('.input-name', [{
            rule: 'required',
            rule: 'customRegexp',
            value: /[a-z]/gi, 
            value: /[а-я]/gi,  
            errorMessage: "Недопустимый формат"
        }
        ])
        .addField('.input-mail', [{
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'email',
            errorMessage: 'Недопустимый формат',
        }
        ])
})

let burgerOpen = document.querySelector('.burger-open');
let burgerClose = document.querySelector('.burger-close');
let burger = document.querySelector('.burger');
let burgerLink = document.querySelectorAll('.nav__link');

burgerOpen.addEventListener('click', function() {
    burger.classList.add('burger--active')
    // document.body.classList.add("stop-scroll")
})
burgerClose.addEventListener('click', function() {
    burger.classList.remove('burger--active')
    // document.body.classList.remove("stop-scroll")
})

burgerLink.forEach(function(e) {
    e.addEventListener("click", function() {
        burger.classList.remove("burger--active")
        // document.body.classList.remove("stop-scroll")
    })
});