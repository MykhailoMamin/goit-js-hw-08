import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('[name="email"]');
  const messageInput = form.querySelector('[name="message"]');
  const storageKey = 'feedback-form-state';

  const storedState = JSON.parse(localStorage.getItem(storageKey));
  if (storedState) {
    emailInput.value = storedState.email || '';
    messageInput.value = storedState.message || '';
  }

  form.addEventListener(
    'input',
    throttle(function () {
      const currentState = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem(storageKey, JSON.stringify(currentState));
    }, 500)
  );

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log('Form values:', currentState);

    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(storageKey);
  });
});
