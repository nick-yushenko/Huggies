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