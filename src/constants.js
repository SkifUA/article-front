
export const WEBSOCKET_URL = 'wss://valerii-article-api.herokuapp.com/cable';

export const STORIES_URL = 'https://valerii-article-api.herokuapp.com/stories';

export const ARTICLES_URL = 'https://valerii-article-api.herokuapp.com/articles';


export const ARTICLES_HEADER_LIST = [
  {
    label: 'ID',
    field: 'id',
    class: '',
    key: 'article-id'
  },
  {
    label: 'Name',
    field: 'name',
    class: '',
    key: 'article-name'
  },
  {
    label: 'Text',
    field: 'text',
    class: '',
    key: 'article-text'
  },
  {
    label: 'Type',
    field: 'article_type',
    class: '',
    key: 'article-type'
  },
  {
    label: 'Created',
    field: 'created_at',
    class: '',
    key: 'article-created'
  },
  {
    label: 'Updated',
    field: 'updated_at',
    class: '',
    key: 'article-updated'
  }
];

export const STORIES_HEADER_LIST = [
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
];
