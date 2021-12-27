const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "Username can't be blank.");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(email, "Email can't be blank.");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid.");
    }
    if (passwordValue === "") {
        setErrorFor(password, "Password can't be blank.");
    } else {
        setSuccessFor(password);
    }
    if (passwordCheckValue === "") {
        setErrorFor(passwordCheck, "Password can't be blank.");
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, "Passwords do not match.")
    }


    else {
        setSuccessFor(passwordCheck);
    }

}

function setErrorFor(input, msg) {
    const formControl = input.parentElement; //form-control div
    const small = formControl.querySelector('small');
    small.innerText = msg;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}