const throttle = require('lodash.throttle');

const refs = {
  mailEl: document.querySelector('[name="email"]'),
  messageEl: document.querySelector('[name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', onFeedback);

function onFeedback(e) {
  const text = {
    email: `${e.target.value}`,
    message: `${e.target.value}`,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(text));
  console.log(text.message);
}
