import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useDataStore } from "../context";

const StoryForm = () => {
  const { addStory } = useDataStore();
  const [name, setName] = useState('')

  const handleStory = ({name}) => {
    if (name !== '') {
      addStory({name})
    }
  }
  return (
    <ReactBootStrap.Form onSubmit={ e => {
      handleStory({name});

      setName('');
      e.preventDefault();
    }}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={ e => { setName(e.target.value) } }/>
      </label>
      <button type="submit">
        Add Story
      </button>
    </ReactBootStrap.Form>
  )
}

export default StoryForm