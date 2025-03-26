
let form = document.querySelector(".form-container");

let name = document.querySelector("#naam");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let mobile = document.querySelector("#contact");

/////////////////////////////////////////////////////////

let nameError = document.querySelector("#name-error");

let lastError = document.querySelector("#last-error");

let emailError = document.querySelector("#email-error");

let mobileError = document.querySelector("#contact-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrors();

  let myName = name.value.trim();
  let mylastName = lastName.value.trim();
  let myEmail = email.value.trim().toLowerCase();
  let myPhone = mobile.value.trim();

  if (
    nameValidation(myName) &&
    lastValidation(mylastName) &&
    emailValidation(myEmail) &&
    phoneValidation(myPhone) 
    

  )
    {
    alert("Form Submitted");
    clearInputs();
    console.log({ myName, myEmail, myPhone });
  }
});

//Clear Error€
function clearErrors() {
  nameError.textContent = "";
  lastError.textContent = "";
  emailError.textContent = "";
  
  mobileError.textContent = "";
}

function clearInputs() {
  name.value = "";
  lastName.value = "";
  email.value = "";
  mobile.value = "";
}

//Name Validation

const nameValidation = (input) => {
  if (input.length < 2) {
    nameError.innerHTML = " First Name must be atleast 2 character long";
    return false;
  }
  return true;
};

const lastValidation = (input) => {
  if (input.length < 6) {
    lastError.innerHTML = "Last Name must be atleast 6 character long";
    return false;
  }
  return true;
};




//EMAIL VALIDTAION
const emailValidation = (input) => {
  let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!emailRegex.test(input)) {
    emailError.innerHTML = "Enter valid email";
    return false;
  }
  return true;
};

//PHONE VALIDATION
const phoneValidation = (input) => {
  let phoneRegex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  if (!phoneRegex.test(input)) {
    mobileError.innerHTML = "Enter valid mobile number";
    return false;
  }
  return true;
};
