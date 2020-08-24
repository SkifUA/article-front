

export const headerList = [
  {
    label: 'ID',
    field: 'id',
    class: 'asc',
    key: 'story-id'
  },
  {
    label: 'Name',
    field: 'name',
    class: '',
    key: 'story-name'
  },
  {
    label: 'Created',
    field: 'created_at',
    class: '',
    key: 'story-created'
  },
  {
    label: 'Updated',
    field: 'updated_at',
    class: '',
    key: 'story-updated'
  },
  {
    label: 'Count Types',
    field: 'types_count',
    class: '',
    key: 'story-count-types'
  },
  {
    label: 'Count Articles',
    field: 'articles_count',
    class: '',
    key: 'story-count-articles'
  },
  {
    label: 'ID',
    field: 'articles.id',
    class: '',
    key: 'story-article-id',
    sortable: false
  },
  {
    label: 'Name',
    field: 'articles.name',
    class: '',
    key: 'story-article-name',
    sortable: false
  },
  {
    label: 'Text',
    field: 'articles.text',
    class: '',
    key: 'story-article-text',
    sortable: false
  },
  {
    label: 'Type',
    field: 'articles.type',
    class: '',
    key: 'story-article-type',
    sortable: false
  },
  {
    label: 'Created',
    field: 'articles.created_at',
    class: '',
    key: 'story-article-created',
    sortable: false
  }
]

export const baseStoriesUrl = 'http://localhost:3000/stories';


export const addStory= async (newStory) => {
  await fetch(baseStoriesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newStory.name,
    })
  });
}