import React, {useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";
import ArticleTableHead from "./ArticleTableHead";


const ArticleTable = () => {
  const { articles, getArticles, deleteArticle, updateArticleForm } = useDataStore();

  useEffect( () => {
    getArticles()
  }, [getArticles]);

  const handleDelete = (id) => {
    deleteArticle(id)
  }
  const handleUpdate = (row) => {
    updateArticleForm({
      id: row.id,
      name: row.name,
      text: row.text,
      article_type: row.article_type
    })
  }

  const renderBodyRow = (row, index) => {
    const groupRow = (
      <tr className="row-group-name" key={index}>
        <td colSpan="7">{row.group}: {row.group_value}</td>
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
        <td>
          <button className="btn btn-warning" onClick={ ()=>handleUpdate(row)}>Edit</button>&nbsp;
          <button className="btn btn-danger" onClick={ ()=>handleDelete(row.id)}>Delete</button>
        </td>
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