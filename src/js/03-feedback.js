const throttle = require('lodash.throttle');

const refs = {
  mailEl: document.querySelector('[name="email"]'),
  messageEl: document.querySelector('[name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
let formText = {};

refs.formEl.addEventListener('input', throttle(onFeedback, 500));
refs.formEl.addEventListener('submit', onForwardingFeedback);

populateForm();

function onForwardingFeedback(e) {
  e.preventDefault();

  if (formText.email && formText.message) {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formText);
    formText = {};
  } else {
    alert('Нужно заполнить все поля');
  }
}

function onFeedback(e) {
  formText[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formText));
}

function populateForm() {
  const messageText = localStorage.getItem(STORAGE_KEY);

  if (messageText) {
    formText = JSON.parse(messageText);
    refs.mailEl.value = formText.email;
    refs.messageEl.value = formText.message;
  }
}
