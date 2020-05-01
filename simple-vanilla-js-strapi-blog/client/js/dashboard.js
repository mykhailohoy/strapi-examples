import axios from 'axios';
const jwt = window.sessionStorage.getItem("jwt");

if (typeof (jwt) != "string") {
  document.body.innerHTML = "Oops! It looks like you don't have permission to view this page.";
}
console.log(jwt);

const form = document.querySelector(".new-article-form"),
  headingField = document.querySelector("#heading"),
  descriptionField = document.querySelector("#description"),
  message = document.querySelector(".new-article-form__message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let heading = headingField.value;
  let blog_text = descriptionField.value;
  addPost(jwt, heading, blog_text)
})

async function addPost(token, heading, blog_text) {
  const res = await fetch("http://localhost:1337/blog-posts", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      heading,
      blog_text,
    })
  });
  console.log(res)
}