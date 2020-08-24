import React from "react";
import { headerList } from "../article-service";
import { useDataStore } from "../context";


const ArticleTableHead = () => {
  const { setArticlesOrder, getArticles } = useDataStore();
  const [heads, setHeads] = React.useState(headerList)

  function handleHeaders(clickedHead) {
    const newHeads = heads.map((head) => {
      const orderClass = head.field === clickedHead.field ?
        head.class === '' ? 'asc' : (head.class === 'asc' ? 'desc' : 'asc') :
        '';
      if (head.field === clickedHead.field) {
        setArticlesOrder({
          field: head.field,
          order: orderClass
        })
      }

      return {
          ...head,
          class: orderClass
        }
    });

    setHeads(newHeads);
    getArticles();
  }

  return (
    <thead className="thead-light">
      <tr className="sortable">
        {
          heads.map((head) => (
            <th
              className={`${head.sortable !== false ? 'sortable' : ''} ${head.class}`}
              key={`article-${head.field}`}
              onClick={() =>handleHeaders(head)}
            >
              {head.label}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}

export default ArticleTableHead