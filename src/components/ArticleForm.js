import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useObserver } from "mobx-react";
import { useDataStore } from "../context";

const ArticleForm = () => {
  const { isArticlesLoading, postArticles, articleForm, updateArticleForm, editArticle, resetArticleForm } = useDataStore();

  const handleArticleSubmit = () => {
    if (articleForm.name !== '' && articleForm.text !== '' && articleForm.article_type !== '') {
      if (articleForm.id === null) {
        postArticles()
      } else {
        editArticle()
      }
    }
  }

  return useObserver(() => (
    <ReactBootStrap.Form onSubmit={ e => {
      handleArticleSubmit();
      resetArticleForm();
      e.preventDefault();
    }}>
      <div className="form-group">
        <label>
          Name
          <input
            className="form-control"
            type="text" name="name"
            value={articleForm.name}
            onChange={ e => { updateArticleForm({ name: e.target.value }) } }
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Text
          <input
            className="form-control"
            type="text" name="text"
            value={articleForm.text}
            onChange={ e => { updateArticleForm({ text: e.target.value }) } }
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Type
          <input
            className="form-control"
            type="text"
            name="article-type"
            value={articleForm.article_type}
            onChange={ e => { updateArticleForm({ article_type: e.target.value }) } }
          />
        </label>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={isArticlesLoading}
      >
        { articleForm.id === null ? 'Add Article' : 'Update Article' }
      </button>
      &nbsp;
      <button
        className="btn btn-secondary"
        onClick={ () => resetArticleForm()}
      >
        Cancel
      </button>
    </ReactBootStrap.Form>
  ))
}

export default ArticleForm