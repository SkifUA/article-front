import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useDataStore } from "../context";
import {useObserver} from "mobx-react";
import MultiSelect from "react-multi-select-component";

const StoryForm = () => {
  const { addStory, articles } = useDataStore();
  const [name, setName] = useState('')
  const [selectedArticles, setSelectedArticles] = useState([])

  const handleStory = ({name, selectedArticles}) => {
    if (name !== '') {
      addStory({name, last_article: { id: selectedArticles.map((art) => { return art.id }) } })
    }
  }

  return useObserver(() => (
    <ReactBootStrap.Form onSubmit={ e => {
      handleStory({name, selectedArticles});
      setName('');
      setSelectedArticles([])
      e.preventDefault();
    }}>
      <div className="form-group">
        <label>
          Name
          <input className="form-control" type="text" name="name" value={name} onChange={ e => { setName(e.target.value) } }/>
        </label>
      </div>
      <div className="form-group">
        <label>
          Articles
          <MultiSelect
            className="form-control"
            options={
              articles.map((article) => {
              return {
                label: article.name,
                value: article.id
              }
            })}
            value={selectedArticles}
            onChange={ setSelectedArticles }
            labelledBy="Articles"
          />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Add Story
      </button>
    </ReactBootStrap.Form>
  ))
}

export default StoryForm