import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = [];

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector(`.feedback-form textarea`),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', onFormInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);

  if (saveMassage) {
    console.log(saveMassage);
    refs.textarea.value = saveMassage;
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form', JSON.stringify(formData));
}
