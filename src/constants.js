
export const WEBSOCKET_URL = 'wss://valerii-article-api.herokuapp.com/cable';

export const STORIES_URL = 'https://valerii-article-api.herokuapp.com/stories';

export const ARTICLES_URL = 'https://valerii-article-api.herokuapp.com/articles';


export const ARTICLES_HEADER_LIST = [
  {
    label: 'ID',
    field: 'articles.id',
    class: '',
    key: 'article-id'
  },
  {
    label: 'Name',
    field: 'articles.name',
    class: '',
    key: 'article-name'
  },
  {
    label: 'Text',
    field: 'articles.text',
    class: '',
    key: 'article-text'
  },
  {
    label: 'Type',
    field: 'articles.article_type',
    class: '',
    key: 'article-type'
  },
  {
    label: 'Created',
    field: 'articles.created_at',
    class: '',
    key: 'article-created'
  },
  {
    label: 'Updated',
    field: 'articles.updated_at',
    class: '',
    key: 'article-updated'
  },
  {
    label: '',
    field: 'actions',
    class: '',
    key: 'article-actions',
    sortable: false
  }
];

export const ARTICLES_GROUP_OPTIONS = [
  { value: 'articles.id', label: 'ID' },
  { value: 'articles.name', label: 'Name' },
  { value: 'articles.article_type', label: 'Type' },
  { value: 'articles.text', label: 'Text' }
];

export const STORIES_GROUP_OPTIONS = [
  { value: 'stories.id', label: 'ID' },
  { value: 'stories.name', label: 'Name' },
  { value: 'stories.types_count', label: 'Types Count' },
  { value: 'stories.articles_count', label: 'Articles Count' },
  { value: 'articles.id', label: 'Last Article' }
];

export const STORIES_HEADER_LIST = [
  {
    label: 'ID',
    field: 'stories.id',
    class: 'asc',
    key: 'story-id'
  },
  {
    label: 'Name',
    field: 'stories.name',
    class: '',
    key: 'story-name'
  },
  {
    label: 'Created',
    field: 'stories.created_at',
    class: '',
    key: 'story-created'
  },
  {
    label: 'Updated',
    field: 'stories.updated_at',
    class: '',
    key: 'story-updated'
  },
  {
    label: 'Types Count ',
    field: 'stories.types_count',
    class: '',
    key: 'story-count-types'
  },
  {
    label: 'Articles Count',
    field: 'stories.articles_count',
    class: '',
    key: 'story-count-articles'
  },
  {
    label: 'ID',
    field: 'articles.id',
    class: '',
    key: 'story-article-id'
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
    field: 'articles.article_type',
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
  },
  {
    label: '',
    field: 'actions',
    class: '',
    key: 'article-actions',
    sortable: false
  }
];
