const toRules = document.querySelectorAll('.toRules')
const toRegister = document.querySelectorAll('.toRegister')

// тригер на открытие попапа "Спасибо" 
const toThanks = document.querySelectorAll('.toThanks')

const rulesModal = document.querySelector('#rulesModal')
const registerModal = document.querySelector('#registerModal')

// попап "Спасибо"
const thanksModal = document.querySelector('#thanksModal')



const closeModal = document.querySelectorAll('.modal-close')

// Закрытие попапа "Спасибо"
const closeThanks = thanksModal.querySelector('.close')

if (closeModal)
  closeModal.forEach(item => {
    item.addEventListener('click', function () {
      if (rulesModal)
        rulesModal.classList.remove('active')
      if (registerModal)
        registerModal.classList.remove('active')

      document.querySelector('body').style.overflowY = 'auto'

    })
  })
if (toRules && rulesModal)
  toRules.forEach(item => {
    item.addEventListener('click', function () {
      rulesModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })

if (toRegister && registerModal)
  toRegister.forEach(item => {
    item.addEventListener('click', function () {
      registerModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })


// открытие попапа "Спасибо"
if (toThanks && thanksModal)
  toThanks.forEach(item => {
    item.addEventListener('click', function () {
      thanksModal.classList.add('active')
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })

if (thanksModal && closeThanks)
  closeThanks.addEventListener('click', function () {
    thanksModal.classList.remove('active')

    document.querySelector('body').style.overflowY = 'auto'

  })

//  Слайдеры

var programSlider = new Swiper('.program-slider', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.program-slider__next',
    prevEl: '.program-slider__prev',
  },


})
const programSlides = document.querySelectorAll('.program-slide')
const programPrev = document.querySelector('.program-slider__prev')
const programNext = document.querySelector('.program-slider__next')

programSlider.on('slideChange', function () {
  if (programSlider.activeIndex == 0)
    programPrev.classList.remove('clickable')
  else
    programPrev.classList.add('clickable')

  if (programSlider.activeIndex == (programSlides.length - 1))
    programNext.classList.remove('clickable')
  else
    programNext.classList.add('clickable')
});


function setBoostSlider(){
  var boostSlider = new Swiper('.boost-slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 30,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.boost-slider__next',
      prevEl: '.boost-slider__prev',
    },
  
  
  })
}

if (window.innerWidth <= 1024)
  setBoostSlider()
// чекбоксы для форм 

// const checkboxes = document.querySelectorAll('.checkbox')

// if (checkboxes)
//   // checkboxes.forEach(item => {
//   //   if (item.querySelector('input').getAttribute('name') == 'brif')
//   //     console.log(item)
//   // })
//   checkboxes.forEach(item => {
//     const input = item.querySelector('input')
//     if (input.hasAttribute('checked'))
//       item.classList.add('checked')
//     else
//       item.classList.remove('checked')

//     input.onchange = function () {
//       if (input.hasAttribute('checked'))
//         item.classList.remove('checked')
//       else
//         item.classList.add('checked')

//       if (item.querySelector('input').getAttribute('name') == 'brif' && )
//       //     console.log(item)

//     }
//   })