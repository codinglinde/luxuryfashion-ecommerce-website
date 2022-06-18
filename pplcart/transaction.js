/** @format */

const form = document.querySelector("form[name='payment-form']");
const nameInput = document.querySelector("input[name='name']");
const cardInput = document.querySelector("input[name='card']");
const expirationInput = document.querySelector("input[name='expiration']");
const securityInput = document.querySelector("input[name='security']");
const addressInput = document.querySelector("input[name='address']");
const postalInput = document.querySelector("input[name='postal']");

nameInput.isValid = () => !!nameInput.value;
cardInput.isValid = () => isValidCardnum(cardInput.value);
expirationInput.isValid = () => isValidExpirationnum(expirationInput.value);
securityInput.isValid = () => isValidSecuritynum(securityInput.value);
addressInput.isValid = () => !!addressInput.value;
postalInput.isValid = () => !!postalInput.value;

const inputFields = [nameInput, cardInput, expirationInput, securityInput, addressInput, postalInput];

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidOrdernum = (ordernum) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(ordernum).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};


/** DONE next */

form.addEventListener("paynow", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

form.addEventListener("back", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("paynow" "back", validateInputs));