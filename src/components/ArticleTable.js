import React, {useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";
import ArticleTableHead from "./ArticleTableHead";


const ArticleTable = () => {
  const { articles, getArticles }= useDataStore();

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