import React, {useState} from "react";
import StoryTable from "../components/StoryTable";
import StoryForm from "../components/StoryForm";
import { Link } from "react-router-dom";
import InputSelect from "../components/Elements/InputSelect";
import {useDataStore} from "../context";


const Stories = () => {
  const { setStoriesGroupBy, getStories } = useDataStore();
  const [grouping, setGrouping] = useState('');

  const groupOptions = [
    { value: 'id', label: 'ID' },
    { value: 'name', label: 'Name' },
    { value: 'types_count', label: 'Types Count' },
    { value: 'articles_count', label: 'Articles Count' },
    { value: 'article.id', label: 'Last Article' }
  ];

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
      <InputSelect options={groupOptions} value={grouping} onChange={handleChange} placeholder="Select order"/>
      <StoryTable />
      <StoryForm />
    </div>
  )
}

export default Stories;