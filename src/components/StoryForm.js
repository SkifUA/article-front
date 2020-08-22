import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

const StoryForm = () => {
  const [name, setName] = useState('')

  const addStory = ({name}) => {

  }
  return (
    <ReactBootStrap.Form onSubmit={ e => {
      addStory({name});

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