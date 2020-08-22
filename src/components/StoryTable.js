import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";

function StoryTable() {
  const [data, setData] = useState([])

  const baseStoriesUrl = 'http://localhost:3000/stories';

  useEffect(() => {
    fetch(`${baseStoriesUrl}?q[sort_by_id]=desc`)
      .then(response => response.json())
      .then(stories => {
        console.log(stories.data)
        setData(stories.data);
          // setLoading(false);
      })
  }, [])


  const renderBodyRow = (column, index) => {
    return (
      <tr key={index}>
        <td>{column.id}</td>
        <td>{column.name}</td>
        <td>{column.articles_count}</td>
        <td>{column.count_types}</td>
        <td>{column.created_at}</td>
        <td>{column.updated_at}</td>

        <td>{column.last_article && column.last_article.id}</td>
        <td>{column.last_article && column.last_article.name}</td>
        <td>{column.last_article && column.last_article.text}</td>
        <td>{column.last_article && column.last_article.type}</td>
        <td>{column.last_article && column.last_article.created_at}</td>
      </tr>
    )
  }

  const renderHead = () => {
    return (
      <thead>
        <tr>
          <th colSpan="6">Story</th>
          <th colSpan="5">Last Article</th>
        </tr>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Articles Count</th>
          <th>Count Types</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Id</th>
          <th>Name</th>
          <th>Text</th>
          <th>Type</th>
          <th>Created</th>
        </tr>
      </thead>
    )
  }

  return (
    <ReactBootStrap.Table key="story" border="1" align="center" width="90%">
        {renderHead()}
        <tbody >
        {data.map(renderBodyRow)}
        </tbody>
    </ReactBootStrap.Table>
  )
}

export default StoryTable;