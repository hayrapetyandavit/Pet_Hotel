import inputValidation from "./inputValidation.js";
import dateValidation from "./dateValidation.js";
import selectValidation from "./selectValidation.js";
import agreeCheckValidation from "./agreeCheckValidation.js";

window.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input'),
          buttons = document.querySelectorAll('.button'),
          message = document.querySelectorAll('.check-out__title'),
          agreeCheck = document.querySelector('#agree'),
          bookButton = document.querySelector('.button__book'),
          checkInInput = document.querySelector('#book-check-in'),
          checkOutInput = document.querySelector('#book-check-out'),
          selectType = document.querySelector('#select-pet'),
          selectFood = document.querySelector('#select-food');
    
    inputValidation(inputs, buttons);
    dateValidation(checkInInput, checkOutInput, bookButton, message);
    selectValidation(selectType, selectFood, bookButton, message);
    agreeCheckValidation(agreeCheck, bookButton);
});