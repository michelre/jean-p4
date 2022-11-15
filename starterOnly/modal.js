function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournamentsNumber = document.getElementById("quantity");
const radios = document.querySelectorAll('input[name="location"]');
const terms = document.getElementById("checkbox1");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form");
const textLabel = document.querySelector(".text-label");
const modalBtnSubmit = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form event
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeModal()
  }
})

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Submit button event function
form.addEventListener("submit", e => {
  e.preventDefault();
  validate()
  // validateInputs();
});

//Display error message
const showError = (element) => {
  element.parentElement.setAttribute("data-error-visible", "true");
};

// Hide modal form elements
const hideForm = () => {
  formData.forEach((data) => data.style.opacity = "0");
  textLabel.style.opacity = "0";
};

// Turn modal submit button to close button
const modalBtnClose = () => {
  modalBtnSubmit.setAttribute("value", "Fermer");
  form.setAttribute("onsubmit", "return closeModal();");
};

//Display validation message
const showSuccess = () => {
  hideForm();
  modalBtnClose();
};


//Email validation regex
const isEmailValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Get today's date to compare with date of birth
const today = new Date();

// Check if location checked
const isLocationChecked = () => {
  for (const radio of radios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

const validateFirstName = () => {
  const firstNameValue = firstName.value.trim();
  if (firstNameValue === '' || firstNameValue.length < 2){
    showError(firstName)
    return false
  }
  return true
}

const validateLastName = () => {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue === '' || lastNameValue.length < 2){
    showError(lastName)
    return false
  }
  return true
}

//Validate user inputs
const validate = () => {

  const validFirstName = validateFirstName()
  const validLastName = validateLastName()

  if(validFirstName && validLastName){
    showSuccess()
  }

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const tournamentsNumberValue = tournamentsNumber.value.trim();



  /*if (firstNameValue === '' || firstNameValue.length < 2) {
    showError(firstName);
  } else

    if (lastNameValue === '' || lastNameValue.length < 2) {
      showError(firstName);
    } else

      if (emailValue === '') {
        showError(email);
      } else if (!isEmailValid(emailValue)) {
        showError(email);
      } else

        if (new Date(birthdateValue).getTime() <= today.getTime()) {
          showError(birthdate);
        } else

          if (tournamentsNumberValue < 0 || tournamentsNumberValue > 99) {
            showError(tournamentsNumber);
          } else

            if (isLocationChecked == false) {
              showError(radios);
            } else
              if (!terms.checked) {
                showError(terms);
              } else {
                showSuccess();
              }*/

};



