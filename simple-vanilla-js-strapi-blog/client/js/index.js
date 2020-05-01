import axios from 'axios';
import htmlToElement from './function.js';

const articlesDiv = document.querySelector(".articles");

async function renderArticles() {
  // getting articles from api
  try {
    let res = await fetch("http://localhost:1337/blog-posts").then(res => res.json());
    render(res, articlesDiv, "article", "article__heading", "article__desc");
  }
  catch (err) {
    console.log(err);
  }

  function render(data, parent, wrapperClass, headingClass, descClass) {
    for (let i in data) {
      let element = `<div class="${wrapperClass}"><h4 class="${headingClass}">${data[i].heading}</h4><p class="${descClass}">${data[i].blog_text}</p></div>`;
      element = htmlToElement(element);
      parent.appendChild(element)
    }
  }
}

renderArticles()