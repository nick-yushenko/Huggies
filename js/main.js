const toRules = document.querySelectorAll('.toRules')
const toRegister = document.querySelectorAll('.toRegister')
const rulesModal = document.querySelector('#rulesModal')
const registerModal = document.querySelector('#registerModal')
const closeModal = document.querySelectorAll('.modal-close')

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