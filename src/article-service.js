// import React from "react";

export const baseArticlesUrl = 'http://localhost:3000/articles';

export const headerList = [
  {
    label: 'ID',
    field: 'id',
    class: '',
    key: 'article-id'
  },
  {
    label: 'Name',
    field: 'name',
    class: '',
    key: 'article-name'
  },
  {
    label: 'Text',
    field: 'text',
    class: '',
    key: 'article-text'
  },
  {
    label: 'Type',
    field: 'type',
    class: '',
    key: 'article-type'
  },
  {
    label: 'Created',
    field: 'created_at',
    class: '',
    key: 'article-created'
  },
  {
    label: 'Updated',
    field: 'updated_at',
    class: '',
    key: 'article-updated'
  }
]

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