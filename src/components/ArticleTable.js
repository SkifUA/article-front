import React, { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap"
import { useObserver } from "mobx-react"
import { useDataStore } from "../context";
import 'mobx-react-lite/batchingForReactDom'


const ArticleTable = () => {
  const store = useDataStore();

  const { articles, addArticle } = store;

  useEffect( () => {
    setTimeout( () => {
      addArticle(
        {
          id: 2
        }
      )
      console.log(articles)
    }, 2000)
  }, [addArticle, articles]);

  const columns = [
    {
      header: 'ID',
      accessor: 'id',
    },
    {
      header: 'Name',
      accessor: 'name',
    },
    {
      header: 'Text',
      accessor: 'text',
    },
    {
      header: 'Type',
      accessor: 'type',
    },
    {
      header: 'Created',
      accessor: 'created_at',
    },
    {
      header: 'Updated',
      accessor: 'updated_at',
    }
  ];

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

  const renderHead = (column, index) => {
    return (
      <th key={`ha${index}`}>{column.header}</th>
    )
  }

  return useObserver(() => (
    <ReactBootStrap.Table key="article" border="1" align="center" width="90%">
      <thead>
      <tr key="article-head">
        {columns.map(renderHead)}
      </tr>
      </thead>
      <tbody >
        {articles.map(renderBodyRow)}
      </tbody>
    </ReactBootStrap.Table>
  ));
}

export default ArticleTable;