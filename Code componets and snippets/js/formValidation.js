//CUSTOM MAIL VALIDATION

const input = document.querySelector('input');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function formValidation(e) {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    document.querySelector('.email-error').style.visibility = 'visible';
    document.querySelector('form img').style.visibility = 'visible';
  } else {
    location.reload()
  }
};
document.querySelector('input[type=submit]').addEventListener('click', formValidation)




//LOOP THROUGH INPUTS FOR VALIDATION ERRORS(USING BUILD-IN VALIDATION)
const userInput = document.querySelectorAll('input:not(input[type="submit"])');
const errorMessages = document.querySelectorAll('.error-message');

userInput.forEach((input, index) => {
  input.addEventListener('blur', () => {
    if (!input.checkValidity()) {
      errorMessages[index].classList.remove('invisible')
    }
  });

  input.addEventListener('keyup', () => {
    if (input.checkValidity()) {
      errorMessages[index].classList.add('invisible')
    }
  });
})