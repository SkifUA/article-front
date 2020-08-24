import React, {useEffect, useState} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";


const ArticleTable = () => {
  const { articles, getArticles, setArticleOrder }= useDataStore();

  const [sort, setSort] = useState({ field: 'id', order: 'asc' });

  useEffect( () => {
    getArticles()
  }, [getArticles]);


  const renderBodyRow = (row, index) => {
    return (
      <tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.text}</td>
        <td>{row.type}</td>
        <td>{row.created_at}</td>
        <td>{row.updated_at}</td>
      </tr>
    )
  }

  const sortHandler = (field, event) => {
    console.log(event)
    const newSort = (field === sort.field) ?
      { field, order: sort.order === 'asc' ? 'desc' : 'asc' } :
      { field, order: 'asc' }
      event.target.class = 'desc'
    setSort(newSort)
    setArticleOrder(newSort);
  }

  return useObserver(() => (
    <ReactBootStrap.Table className="table table-bordered table-sortable" key="articles-table">
      <thead className="thead-light">
        <tr key="article-head">
          <th key="id" onClick={e => sortHandler('id', e)}>ID</th>
          <th key="name">Name</th>
          <th key="text">Text</th>
          <th key="article_type">Type</th>
          <th key="created_at">Created</th>
          <th key="updated_at">Updated</th>
        </tr>
      </thead>
      <tbody >
        {articles.map(renderBodyRow)}
      </tbody>
    </ReactBootStrap.Table>
  ));
}

export default ArticleTable;