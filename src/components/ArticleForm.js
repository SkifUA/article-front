import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useDataStore } from "../context";

const ArticleForm = () => {
  const { addArticle } = useDataStore();
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

  return (
    <ReactBootStrap.Form onSubmit={ e => {
      handleArticle({name, text, type});
      setType('');
      setText('');
      setName('');
      e.preventDefault();
    }}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={ e => { setName(e.target.value) } }/>
      </label>
      <label>
        Text
        <input type="text" name="text" value={text} onChange={ e => { setText(e.target.value) } }/>
      </label>
      <label>
        Type
        <input type="text" name="article-type" value={type} onChange={ e => { setType(e.target.value) } }/>
      </label>
      <button type="submit">
        Add Article
      </button>
    </ReactBootStrap.Form>
  )
}

export default ArticleForm