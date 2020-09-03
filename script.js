'using strict'
import { getValidationStatus, setValidationStatus } from "./validations.js";

const passwordField = document.getElementById("password"),
      passwordRepeatField = document.getElementById("passwordRepeat"),
      firstNameField = document.getElementById("firstName"),
      lastNameField = document.getElementById("lastName"),
      emailField = document.getElementById("email"),
      agreeRulesCheckBox = document.getElementById("email"),
      form = document.getElementById("form");

const ValidationOptions = {
  password: {require: true, minLength: 8},
  passwordRepeat: {require: true, minLength: 8, equal: () => passwordField.value},
  firstName: {required: true},
  lastName: {required: true},
  email: {email},
  agreeRules: {}
};

const ValidationStatuses = {
  password:{
    set: () => setValidationStatus(passwordField, ValidationOptions.password),
    get: () => getValidationStatus(passwordField, ValidationOptions.password)
  },
  passwordRepeat: {
    set: () => setValidationStatus(passwordRepeatField, ValidationOptions.passwordRepeat),
    get: () => getValidationStatus(passwordRepeatField, ValidationOptions.passwordRepeat)
  },
  firstName: {
    set: () => setValidationStatus(firstNameField, ValidationOptions.firstName),
    get: () => getValidationStatus(firstNameField, ValidationOptions.firstName)
  },
  lastName:{
    set: () => setValidationStatus(lastNameField, ValidationOptions.lastName),
    get: () => getValidationStatus(lastNameField, ValidationOptions.lastName)
  },
  email: {
    set: () => setValidationStatus(emailField, ValidationOptions.email),
    get: () => getValidationStatus(emailField, ValidationOptions.email)
  },
  agreeRules: {}
}
firstNameField.addEventListener("input", (e) => {
  ValidationStatuses.firstName.set();
});

lastNameField.addEventListener("input", (e) => {
  ValidationStatuses.lastName.set();
});

emailField.addEventListener("input", (e) => {
  ValidationStatuses.email.set();
});

passwordField.addEventListener("input", (e) => {
  ValidationStatuses.password.set();
});

passwordRepeatField.addEventListener("input", (e) => {
  ValidationStatuses.passwordRepeat.set();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValidForm = 
  ValidationStatuses.firstName.get() && 
  ValidationStatuses.lastName.get() &&
  ValidationStatuses.email.get() &&
  ValidationStatuses.password.get() &&
  ValidationStatuses.passwordRepeat.get();
  
  if(!isValidForm){
    ValidationStatuses.firstName.set();
    ValidationStatuses.lastName.set();
    ValidationStatuses.email.set();
    ValidationStatuses.password.set();
    ValidationStatuses.passwordRepeat.set();
  }
})



