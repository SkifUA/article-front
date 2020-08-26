import React, {useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider';
import { useDataStore } from "../context";
import { WEBSOCKET_URL } from "../constants";
import ArticleTableHead from "./ArticleTableHead";


const ArticleTable = () => {
  const { articles, getArticles, addArticle }= useDataStore();

  useEffect( () => {
    getArticles()
  }, [getArticles]);

  const handleReceivedArticle = response => {
    addArticle(response.data);
  };

  const renderBodyRow = (row, index) => {
    return (
      <tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.text}</td>
        <td>{row.article_type}</td>
        <td>{row.created_at}</td>
        <td>{row.updated_at}</td>
      </tr>
    )
  }

  return useObserver(() => (
    <ActionCableProvider url={WEBSOCKET_URL}>
      <ActionCable
        channel={{ channel: 'ArticlesChannel' }}
        onReceived={handleReceivedArticle}
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