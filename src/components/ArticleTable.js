import React, {useEffect, useState} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";


const ArticleTable = () => {
  const store = useDataStore();
  const { articles, addArticle, setArticleOrder } = store;

  const [sort, setSort] = useState({ field: 'id', order: 'asc' });

  useEffect( () => {
    setTimeout( () => {
      addArticle(
        {
          id: 2,
          name: 'Second'
        }
      )
      console.log(articles)
    }, 5000)
  }, [addArticle, articles]);


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
          <th className="asc" key="id" onClick={e => sortHandler('id', e)}>ID</th>
          <th className="asc" key="name">Name</th>
          <th className="desc" key="text">Text</th>
          <th className="" key="article_type">Type</th>
          <th className="" key="created_at">Created</th>
          <th className="" key="updated_at">Updated</th>
        </tr>
      </thead>
      <tbody >
        {articles.map(renderBodyRow)}
      </tbody>
    </ReactBootStrap.Table>
  ));
}

export default ArticleTable;