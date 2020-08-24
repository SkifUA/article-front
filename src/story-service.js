

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
    field: 'count_types',
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
    field: 'article_id',
    class: '',
    key: 'story-article-id',
    sortable: false
  },
  {
    label: 'Name',
    field: 'article_name',
    class: '',
    key: 'story-article-name',
    sortable: false
  },
  {
    label: 'Text',
    field: 'article_text',
    class: '',
    key: 'story-article-text',
    sortable: false
  },
  {
    label: 'Type',
    field: 'article_type',
    class: '',
    key: 'story-article-type',
    sortable: false
  },
  {
    label: 'Created',
    field: 'article_created_at',
    class: '',
    key: 'story-article-created',
    sortable: false
  }
]

export const baseStoriesUrl = 'http://localhost:3000/stories';

export const getStories = async () => {

  return await fetch(baseStoriesUrl)
    .then(response => response.json())
    .then(stories => {
      const res = stories.data
      console.log(res)
    })


    // setLoading(false);

  // fetch(`${baseStoriesUrl}?q[sort_by_id]=desc`)
  // .then(response => response.json())
  // .then(stories => {
  //   console.log(stories.data)
  //   setData(stories.data);
  //   // setLoading(false);
  // })
}

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