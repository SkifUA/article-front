// import React from "react";

const baseArticlesUrl = 'http://localhost:3000/articles';

export const getArticles = () => {
  fetch(baseArticlesUrl)
    .then(response => response.json())
    .then(articles => {
      console.log(articles.data)
      return articles;
    })
    .catch(error => {
      console.error(error);
    })
    // setLoading(false);

  // fetch(`${baseArticlesUrl}?q[sort_by_id]=desc`)
  // .then(response => response.json())
  // .then(articles => {
  //   console.log(articles.data)
  //   setData(articles.data);
  //   // setLoading(false);
  // })
}

export const addArticle = async (newArticle) => {
  await fetch(baseArticlesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newArticle.name,
      text: newArticle.text,
      type: newArticle.type
    })
  });
}