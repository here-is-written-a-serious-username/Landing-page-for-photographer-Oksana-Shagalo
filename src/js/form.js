
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const FORM_KEY = 'formDataState';

form.addEventListener("submit", onFormSubmit);
form.addEventListener('input', onFormInput);
(() => {
    inputs.forEach((input) => {
        input.addEventListener("blur", onValidatorInputBlur);
    });
})();

const formData = {
    name: "",
    tel: "",
    email: "",
};

afterPageReload();

function onValidatorInputBlur(event) {
    const input = event.currentTarget;
    const inputContentLength = event.currentTarget.value.split("").length;

    if (inputContentLength === 0) {
        input.classList.remove('form__input-valid', 'form__input-invalid');
    } else if (inputContentLength >= Number(input.dataset.length)) {
        input.classList.remove('form__input-invalid');
        input.classList.add('form__input-valid');
    } else {
        input.classList.remove('form__input-valid');
        input.classList.add('form__input-invalid');
    };
}

function onFormInput(event) {
    const { user_name, user_tel, user_email } = event.currentTarget.elements;
    formData.name = user_name.value;
    formData.tel = user_tel.value;
    formData.email = user_email.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    const hasInvalidInput = Array.from(inputs).some(input => input.classList.contains('form__input-invalid'));
    const hasValidInput = Array.from(inputs).every(input => input.classList.contains('form__input-valid'));

    if (!hasInvalidInput && hasValidInput) {

        console.log('Дані відправлено.');

        inputs.forEach(input => {
            input.classList.remove('form__input-valid', 'form__input-invalid');
        });
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);
    } else {
        console.log('Форма містить помилки валідації. Дані не відправлено.');
    }
}

function afterPageReload() {
    const storedData = JSON.parse(localStorage.getItem(FORM_KEY));
    if (storedData === null) {
        return;
    }
    const { user_name, user_tel, user_email } = form.elements;
    user_name.value = storedData.name || '';
    user_tel.value = storedData.tel || '';
    user_email.value = storedData.email || '';
}