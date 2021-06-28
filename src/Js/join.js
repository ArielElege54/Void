let formContainer = document.querySelectorAll('.form-cont')
let switchButton = document.querySelectorAll('.switch-button')

window.addEventListener('load', () => formContainer[1].classList.add('destroy'))
switchButton.forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault()
      formContainer.forEach(form => form.classList.remove('destroy', 'rebuild'))
      switch (button) {
         case switchButton[0]:
            formContainer[1].classList.add('rebuild')
            formContainer[0].classList.add('destroy')
            break
         case switchButton[1]:
            formContainer[0].classList.add('rebuild')
            formContainer[1].classList.add('destroy')
            break
      }
   })
})