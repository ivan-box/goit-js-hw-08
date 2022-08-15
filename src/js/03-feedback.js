// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getItem(key) - повертає зі сховища значення з ключем key.
// removeItem(key) - видаляє зі сховища запис з ключем key.
// clear() - повністю очищає всі записи сховища.
// length - кількість записів у сховищі.

// const form = document.querySelector('#message-form');
// const output = document.querySelector('#output');
// const LOCALSTORAGE_KEY = 'goit-example-message';

// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }

import throttle from 'lodash.throttle';

const refs = {
  onForm: document.querySelector('.feedback-form'),
  onEmail: document.querySelector('[name="email"]'),
  onMessage: document.querySelector('[name="message"]'),
};
let feedback = {};
refs.onForm.addEventListener('input', throttle(formValue, 500));
function formValue() {
  feedback = {
    email: refs.onEmail.value,
    message: refs.onMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}
function getFormValue() {
  let saveFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveFeedback) {
    refs.onEmail.value = saveFeedback.email;
    refs.onMessage.value = saveFeedback.message;
  }
  // feedback = saveFeedback;
}
getFormValue();
refs.onForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (refs.onEmail.value.trim() !== '' && refs.onMessage.value.trim() !== '') {
    console.log(feedback);

    localStorage.removeItem('feedback-form-state');
    refs.onForm.reset();
  }
}

// console.log(saveFeedback);
// console.log();
