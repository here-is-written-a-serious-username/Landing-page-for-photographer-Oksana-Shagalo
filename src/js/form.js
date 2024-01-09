

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

form.addEventListener("submit", onFormSubmit);
input.addEventListener("blur", onValidatorInputBlur);

const infoFromForm = {
    name: "",
    tel: "",
    email: "",
};

function onValidatorInputBlur(event) {

    const inputContentLength = event.currentTarget.value.split("").length;

    if (inputContentLength === 0) {
        input.classList.remove('form__input-valid');
        input.classList.remove('form__input-invalid');
    } else if (inputContentLength >= Number(input.dataset.length)) {
        input.classList.remove('form__input-invalid');
        input.classList.add('form__input-valid');
    } else {
        input.classList.remove('form__input-valid');
        input.classList.add('form__input-invalid');
    };
}

function onFormSubmit(event) {
    event.preventDefault();
    // event.currentTarget.reset();
    // input.classList.remove('form__input-valid');
    // input.classList.remove('form__input-invalid');

    // const {
    //     elements: { user_name, user_tel, user_email }
    // } = event.currentTarget;
    // const { user_name, user_tel, user_email } = event.currentTarget.elements;

    // infoFromForm.name = user_name.value;
    // infoFromForm.tel = user_tel.value;
    // infoFromForm.email = user_email.value;

    // if (user_name.value === "" || user_tel.value === "") {
    //     input.classList.remove('form__input-valid');
    //     input.classList.add('form__input-invalid');
    // } else {
    //     input.classList.remove('form__input-invalid');
    //     input.classList.add('form__input-valid');
    // }

    // if (user_name !== "" && user_tel.value !== "") {
    //     event.currentTarget.reset();
    // }
}