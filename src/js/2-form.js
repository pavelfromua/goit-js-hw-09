let formData = {
  email: "",
  message: ""
}

const formKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  event.preventDefault();

  const { name, value } = event.target;
  formData[name] = value;

  localStorage.setItem(formKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const {email, message} = form.elements;

  if (!email.value || !message.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  cleanData();
});

function cleanData() {
  for (let key in formData) {
    formData[key] = "";
  }

  form.reset();
  localStorage.removeItem(formKey);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(formKey);

  if (savedData) {
    const { email = "", message = "" } = JSON.parse(savedData);

    form.elements.email.value = email;
    form.elements.message.value = message;
    formData = { email, message };
  }
});
