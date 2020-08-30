import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataStore } from "../context";
import StoryTable from "../components/StoryTable";
import StoryForm from "../components/StoryForm";
import InputSelect from "../components/Elements/InputSelect";
import { STORIES_GROUP_OPTIONS } from "../constants"


const Stories = () => {
  const { setStoriesGroupBy, getStories } = useDataStore();
  const [grouping, setGrouping] = useState('');

  const handleChange = event => {
    const value = event.target.value
    setGrouping(value);
    setStoriesGroupBy(value);
    getStories();
  };

  return (
    <div>
      <p><Link to="/articles">to articles</Link></p>
      <h1>Stories</h1>
      <InputSelect options={STORIES_GROUP_OPTIONS}
                   value={grouping}
                   onChange={handleChange}
                   placeholder="Select order"
                   label="Sort By"
      />
      <StoryTable />
      <h3>Create Story</h3>
      <StoryForm />
    </div>
  )
}

export default Stories;