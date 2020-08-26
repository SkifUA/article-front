import React, {useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider';
import { useDataStore } from "../context";
import { WEBSOCKET_URL } from "../constants";
import ArticleTableHead from "./ArticleTableHead";


const ArticleTable = () => {
  const { articles, getArticles, addArticle, deleteArticle, dropArticle }= useDataStore();

  useEffect( () => {
    getArticles()
  }, [getArticles]);

  const handleReceivedArticle = (response) => {
    addArticle(response.data);
  };
  const handleDelete = (id) => {
    deleteArticle(id)
  }
  const handleDrop = (response) => {
    dropArticle(response.id)
  }

  const renderBodyRow = (row, index) => {
    return (
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
  }

  return useObserver(() => (
    <ActionCableProvider url={WEBSOCKET_URL}>
      <ActionCable
        channel={{ channel: 'ArticlesChannel' }}
        onReceived={handleReceivedArticle}
      />
      <ActionCable
        channel={{ channel: 'DeleteArticleChannel' }}
        onReceived={handleDrop}
      />
      <ReactBootStrap.Table className="table table-bordered table-sortable" key="articles-table">
        <ArticleTableHead/>
        <tbody >
          {articles.map(renderBodyRow)}
        </tbody>
      </ReactBootStrap.Table>
    </ActionCableProvider>
  ));
}

export default ArticleTable;