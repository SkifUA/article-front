// import React from "react";

export const baseArticlesUrl = 'http://localhost:3000/articles';

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