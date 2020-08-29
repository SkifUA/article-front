import React from "react";
import StoryTable from "../components/StoryTable";
import StoryForm from "../components/StoryForm";
import { Link } from "react-router-dom";


const Stories = () => {

  return (
    <div>
      <p><Link to="/articles">to articles</Link></p>
      <h1>Stories</h1>
      <StoryTable />
      <StoryForm />
    </div>
  )
}

export default Stories;