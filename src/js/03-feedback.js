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
    refs.onEmail.value = saveFeedback.email || refs.onEmail.value == '';
    refs.onMessage.value = saveFeedback.message || refs.onMessage.value == '';
  }
  feedback = saveFeedback;
}
getFormValue();
refs.onForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (refs.onEmail.value.trim() && refs.onMessage.value.trim()) {
    console.log(feedback);

    localStorage.removeItem('feedback-form-state');
    refs.onForm.reset();
  }
}
