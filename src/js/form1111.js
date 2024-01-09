{/* <input
type = "text"
id = "validation-input"
data - length="6"
placeholder = "Please enter 6 symbols"/> */}

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidatorInputBlur);


function onValidatorInputBlur(event) {

    const inputContentLength = event.currentTarget.value.split("").length;

    if (inputContentLength === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
}



const infoFromLogin = {
    email: "",
    password: "",
};

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    infoFromLogin.email = email.value;
    infoFromLogin.password = password.value;

    if (email.value === "" || password.value === "") {
        alert("Wow-wow-wow!!! Don't you see that not all the fields are filled in??? \nFill them quickly or Goodbye)))");
    } else console.log(infoFromLogin);

    // console.log(`Email: ${email.value}, Password: ${password.value}`);

    if (email.value !== "" && password.value !== "") {
        event.currentTarget.reset();
    }

}








// const form = document.querySelector('form');
const error = document.querySelector('span');
const inputs = document.querySelectorAll('input');


form.addEventListener('submit', function (e) {

    e.preventDefault();
    error.classList.remove('show');
    inputs.forEach(input => {
        input.classList.remove('error')
        if (input.value == '') {
            input.classList.add('error')
        }
    })
    if (!this.checkValidity()) {
        error.classList.add('show')
    }
});