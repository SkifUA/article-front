import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useDataStore } from "../context";
import ApplicationWebsocket from "../components/ApplicationWebsocket";
import DeleteApplicationWebsocket from "../components/DeleteApplicationWebsocket";
import ArticleSearch from "../components/ArticleSearch";
import ArticleTable from "../components/ArticleTable";
import ArticleForm from "../components/ArticleForm";
import InputSelect from "../components/Elements/InputSelect";
import { ARTICLES_GROUP_OPTIONS } from "../constants"


const Articles = () => {
  const { setArticlesGroupBy, getArticles } = useDataStore();
  const [grouping, setGrouping] = useState('');

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
      <InputSelect
        options={ARTICLES_GROUP_OPTIONS}
        value={grouping}
        onChange={handleChange}
        placeholder="Select order"
        label="Sort By"
      />
      <ArticleTable />
      <h3>Create article</h3>
      <ArticleForm />
    </div>
  )
}

export default Articles;