import React from "react";
import { STORIES_HEADER_LIST } from "../constants";
import { useDataStore } from "../context";


const StoryTableHead = () => {
  const { setStoriesOrder, getStories } = useDataStore();
  const [heads, setHeads] = React.useState(STORIES_HEADER_LIST)

  function handleHeaders(clickedHead) {
    const newHeads = heads.map((head) => {
      const orderClass = head.field === clickedHead.field ?
        head.class === '' ? 'asc' : (head.class === 'asc' ? 'desc' : 'asc') :
        '';
      if (head.field === clickedHead.field) {
        setStoriesOrder({
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
    getStories();
  }

  return (
    <thead className="thead-light">
      <tr>
        <th colSpan="6">Story</th>
        <th colSpan="5">Last Article</th>
      </tr>
      <tr className="sortable">
        {
          heads.map((head) => (
            <th
              className={`${head.sortable !== false ? 'sortable' : ''} ${head.class}`}
              key={`story-${head.field}`}
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

export default StoryTableHead