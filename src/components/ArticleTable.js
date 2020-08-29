import React, {useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";
import ArticleTableHead from "./ArticleTableHead";


const ArticleTable = () => {
  const { articles, getArticles, deleteArticle }= useDataStore();

  useEffect( () => {
    getArticles()
  }, [getArticles]);

  const handleDelete = (id) => {
    deleteArticle(id)
  }

  const renderBodyRow = (row, index) => {
    const groupRow = (
      <tr key={index}>
        <td colSpan="1">Group: {row.group}</td>
        <td colSpan="6">{row.group_value}</td>
      </tr>
    )

    const defaultRow = (
      <tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.text}</td>
        <td>{row.article_type}</td>
        <td>{row.created_at}</td>
        <td>{row.updated_at}</td>
        <td><button onClick={ ()=>handleDelete(row.id)}>Delete</button></td>
      </tr>
    )

    return row.group ? groupRow : defaultRow
  }

  return useObserver(() => (
    <ReactBootStrap.Table className="table table-bordered table-sortable" key="articles-table">
      <ArticleTableHead/>
      <tbody >
        {articles.map(renderBodyRow)}
      </tbody>
    </ReactBootStrap.Table>
  ));
}

export default ArticleTable;