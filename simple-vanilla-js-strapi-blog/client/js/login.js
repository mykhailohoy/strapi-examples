const form = document.querySelector(".form"),
  identifierField = document.querySelector("#identifier"),
  message = document.querySelector(".form__message"),
  passwordField = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let identifier = identifierField.value;
  let password = passwordField.value;
  logIn(identifier, password)
})

/* function logIn(identifier, password) {
  axios.post('http://localhost:1337/auth/local', {
    identifier: identifier,
    password: password,
  }).then(response => {
    window.sessionStorage.setItem("jwt", response.data.jwt);
    window.location.href = "dashboard.html";
  }).catch(err => {
    if (err.response.status == 400) {
      message.innerHTML = "Incorrect login or password";
    } else {
      message.innerHTML = "An error occured. Please try again later";
    }
  })
} */

// doesn't capture error
async function logIn(identifier, password) {
  const data = await fetch("http://localhost:1337/auth/local", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier,
      password, 
    }),
  }).then(res => res.json())
  window.sessionStorage.setItem("jwt", data.jwt);
  window.location.href = "dashboard.html";
}