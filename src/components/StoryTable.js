import React from "react";
import { useObserver } from "mobx-react"
import * as ReactBootStrap from "react-bootstrap";
import StoryTableHead from "./StoryTableHead";
import { useDataStore } from "../context";

function StoryTable() {

  const { stories, getStories, deleteStory } = useDataStore();

  React.useEffect( () => {
    getStories()
  }, [getStories]);

  const handleDelete = (id) => {
    deleteStory(id)
  }

  const renderBodyRow = (column, index) => {
    return (
      <tr key={index}>
        <td>{column.id}</td>
        <td>{column.name}</td>
        <td>{column.created_at}</td>
        <td>{column.updated_at}</td>
        <td>{column.types_count}</td>
        <td>{column.articles_count}</td>

        <td>{column.last_article && column.last_article.id}</td>
        <td>{column.last_article && column.last_article.name}</td>
        <td>{column.last_article && column.last_article.text}</td>
        <td>{column.last_article && column.last_article.article_type}</td>
        <td>{column.last_article && column.last_article.created_at}</td>
        <td><button onClick={ ()=>handleDelete(column.id)}>Delete</button></td>
      </tr>
    )
  }

  return useObserver(() => (
    <ReactBootStrap.Table className="table table-bordered table-sortable" key="stories-table" >
        <StoryTableHead />
        <tbody >
          {stories.map(renderBodyRow)}
        </tbody>
    </ReactBootStrap.Table>
  ))
}

export default StoryTable;