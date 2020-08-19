import React, {useEffect, useMemo, useState} from "react";
import { useTable } from "react-table"

function ArticleTable() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/articles')
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
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Text',
        accessor: 'text',
      },
      {
        Header: 'Type',
        accessor: 'article_type',
      },
      {
        Header: 'Created',
        accessor: 'created_at',
      },
      {
        Header: 'Updated',
        accessor: 'updated_at',
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
  } = useTable({ columns, data })

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

export default ArticleTable;