import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useObserver } from "mobx-react";
import { useDataStore } from "../context";

const ArticleForm = () => {
  const { isArticlesLoading, postArticles } = useDataStore();
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [article_type, setType] = useState('')



  const handleArticle = ({name, text, article_type}) => {
    if (name !== '' && text !== '' && article_type !== '') {
      postArticles(
        {name, text, article_type}
      )
    }
  }

  return useObserver(() => (
    <ReactBootStrap.Form onSubmit={ e => {
      handleArticle({name, text, article_type});
      setType('');
      setText('');
      setName('');
      e.preventDefault();
    }}>
      <div className="form-group">
        <label>
          Name
          <input
            className="form-control"
            type="text" name="name"
            value={name}
            onChange={ e => { setName(e.target.value) } }
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Text
          <input
            className="form-control"
            type="text" name="text"
            value={text}
            onChange={ e => { setText(e.target.value) } }
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
            value={article_type}
            onChange={ e => { setType(e.target.value) } }
          />
        </label>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={isArticlesLoading}
      >
        Add Article
      </button>
    </ReactBootStrap.Form>
  ))
}

export default ArticleForm