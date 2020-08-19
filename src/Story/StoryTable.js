import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table"


function StoryTable() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stories?q[sort_by_id]=desc')
      .then(response => response.json())
      .then(stories => {
        console.log(stories.data)
        setData(stories.data);
          // setLoading(false);
      })
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Story',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Articles Count',
            accessor: 'articles_count',
          },
          {
            Header: 'Count Types',
            accessor: 'count_types',
          },
          {
            Header: 'Created',
            accessor: 'created_at',
          },
          {
            Header: 'Updated',
            accessor: 'updated_at',
          }
        ]
      },
      {
        Header: 'Last Article',
        columns: [
          {
            Header: 'ID',
            accessor: 'article.id',
          },
          {
            Header: 'Name',
            accessor: 'article.name',
          },
          {
            Header: 'Text',
            accessor: 'article.text',
          },
          {
            Header: 'Type',
            accessor: 'article.article_type',
          },
          {
            Header: 'Created',
            accessor: 'article.created_at',
          }
       ]
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default StoryTable;