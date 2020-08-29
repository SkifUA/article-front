import React, {useState} from "react";
import ApplicationWebsocket from "../components/ApplicationWebsocket";
import DeleteApplicationWebsocket from "../components/DeleteApplicationWebsocket";
import ArticleSearch from "../components/ArticleSearch";
import ArticleTable from "../components/ArticleTable";
import ArticleForm from "../components/ArticleForm";
import {Link} from "react-router-dom";
import InputSelect from "../components/Elements/InputSelect";
import {useDataStore} from "../context";


const Articles = () => {
  const { setArticlesGroupBy, getArticles } = useDataStore();
  const [grouping, setGrouping] = useState('');

  const groupOptions = [
    { value: 'id', label: 'ID' },
    { value: 'name', label: 'Name' },
    { value: 'article_type', label: 'Type' },
    { value: 'text', label: 'Text' }
  ];

  const handleChange = event => {
    const value = event.target.value
    setGrouping(value);
    setArticlesGroupBy(value);
    getArticles();
  };

  return(
    <div>
      <ApplicationWebsocket />
      <DeleteApplicationWebsocket/>
      <p><Link to="/">to stories</Link></p>
      <h1>Articles</h1>
      <ArticleSearch />
      <InputSelect options={groupOptions} value={grouping} onChange={handleChange} placeholder="Select order"/>
      <ArticleTable />
      <ArticleForm />
    </div>
  )
}

export default Articles;