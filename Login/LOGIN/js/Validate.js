//Adding the js style

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  // Get the values from the input

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  //username validation
  if (usernameValue === "") {
    setErrorFor(username, "username cannot be blank");
  } else if (usernameValue.length < 6) {
    setErrorFor(username, "username must be at least 6 characters long");
  } else {
    setSuccessFor(username);
  }

  //email validation
  if (emailValue === "") {
    setErrorFor(email, "email address cannot be blank");
  } else {
    setSuccessFor(email);
  }

  //password validation
  if (passwordValue === "") {
    setErrorFor(password, "password is required");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "password must be at least 8 characters long");
  } else {
    setSuccessFor(password);
  }

  //confirm password validation
  if (password2Value === "") {
    setErrorFor(password2, "confirm password is required");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "password not the same");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // form-control
  const small = formControl.querySelector("small");

  //add error message inside small
  small.innerText = message;

  //Add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // form-control

  //Add error class
  formControl.className = "form-control success";
}
