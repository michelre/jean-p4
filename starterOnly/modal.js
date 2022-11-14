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
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form");
const radios = document.querySelectorAll('input[name="location"]');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form event
closeModalBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Submit button event function
form.addEventListener("submit", e => {
  e.preventDefault();
  // validateInputs();
});

//Display error message 
const showError = (element) => {
  element.parentElement.setAttribute("data-error-visible", "true");
};

//Display validation message

// const showSuccess = () => {};

//Validate user inputs

const isEmailValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const today = new Date();

const isLocationChecked = () => {
  for (const radio of radios) {
    if (radio.checked) {
      return true;
      break;
    } else {
      return false;
    }
  }
};

const validate = () => {

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const tournamentsNumberValue = tournamentsNumber.value.trim();

  if (firstNameValue === '' || firstNameValue.length < 2) {
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

        if (birthdateValue.getTime() >= today.getTime()) {
          showError(birthdate);
        } else

          if (tournamentsNumberValue < 0 || tournamentsNumberValue > 99) {
            showError(tournamentsNumber);
          } else 

          if (isLocationChecked == false) {
            showError(radios);
          }



};


// Check if "location" radio button selected
function validateRadio() {
  let valid = false;
  for (let i = 0; i < locationUserInput.length; i++) {
    if (locationUserInput[i].checked) {
      valid = true;
      break;
    }
  }
  if (valid) {
    alert("succeeeeess")
  }
  else {
    alert("faiiiiil")
    console.log("it workssss")
  }
}


