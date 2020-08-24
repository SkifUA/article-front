import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useDataStore } from "../context";
import {useObserver} from "mobx-react";

const ArticleForm = () => {
  const { addArticle, isArticlesLoading } = useDataStore();
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [type, setType] = useState('')

  // const response = fetch('http://localhost:3000/articles', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name,
  //     text,
  //     type
  //   })
  // });
  //
  // function addTodo(title) {
  //   setTodos(todos.concat([{
  //     title,
  //     id: Date.now(),
  //     completed: false
  //   }]))
  // }

  const handleArticle = ({name, text, type}) => {
    if (name !== '' && text !== '' && type !== '') {
      addArticle(
        {name, text, type}
      )
    }
  }

  return useObserver(() => (
    <ReactBootStrap.Form onSubmit={ e => {
      handleArticle({name, text, type});
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
            value={type}
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