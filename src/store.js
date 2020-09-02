
import { ARTICLES_URL, STORIES_URL } from "./constants";

export function createStore() {

  return {
    articles: [],

    cleanArticles() {
      this.articles.length = 0
    },

    articleNameOrTextSearch: '',
    articlesGroupBy: '',
    articleForm: {
      id: null,
      name: '',
      text: '',
      article_type: ''
    },
    async editArticle() {
      this.isArticlesLoading = true;
      try {
        await fetch(ARTICLES_URL + `/${this.articleForm.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.articleForm)
        })
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },
    updateArticles(data) {
      const newArticles = this.articles.map((article) => {
        if(article.id === data.id) {
          return Object.assign(article, data)
        } else {
          return article
        }
      });
      this.articles.length = 0;
      this.articles.push(...newArticles);
    },
    resetArticleForm() {
      this.updateArticleForm({
        id: null,
        name: '',
        text: '',
        article_type: ''
      })
    },
    updateArticleForm(input) {
      if (input.id === null || input.id) {
        this.articleForm.id = input.id;
      }
      if (typeof input.name === 'string') {
        this.articleForm.name = input.name;
      }
      if (typeof input.text === 'string') {
        this.articleForm.text = input.text;
      }
      if (typeof input.article_type === 'string') {
        this.articleForm.article_type = input.article_type;
      }
    },


    setArticleNameOrTextSearch(input) {
      this.articleNameOrTextSearch = input
    },
    setArticlesGroupBy(input) {
      this.setArticlesOrder({ field: input, order: 'asc' })
      this.articlesGroupBy = input
    },

    addArticle(article) {
      this.articles.unshift(article)
    },

    isArticlesLoading: false,

    setIsArticlesLoading(status) {
      this.isArticlesLoading = status
    },

    async getArticles() {
      this.resetArticleForm();
      this.isArticlesLoading = true;
      let url = `${ARTICLES_URL}?orders[${this.articleOrder.field}]=${this.articleOrder.order}`;
      if (this.articleNameOrTextSearch !== '') {
        url += '&scopes[name_or_text_cont]=' + this.articleNameOrTextSearch;
      }
      if (this.articlesGroupBy !== '') {
        url += '&group=' + this.articlesGroupBy;
      }

      try {
        await fetch(url)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            // console.log(data)
            this.articles.length = 0
            this.articles.push(...data)
          })
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    async postArticles() {
      this.isArticlesLoading = true;
      try {
        fetch(ARTICLES_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.articleForm)
        });
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    dropArticle(id) {
     const newArticles = this.articles.filter(h => h.id !== id);
      this.articles.length = 0
      this.articles.push(...newArticles)
    },

    async deleteArticle(id) {
      this.isArticlesLoading = true;
      try {
        await fetch(ARTICLES_URL + `/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })

      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    articleOrder: { field: 'articles.id', order: 'asc' },

    setArticlesOrder(order) {
      this.articleOrder = order
    },


    // STORIES
    stories: [],
    storiesGroupBy: '',

    setStoriesGroupBy(input) {
      this.setStoriesOrder({ field: input, order: 'asc' })
      this.storiesGroupBy = input
    },

    cleanStories() {
      this.stories.length = 0
    },

    addStory(story) {
      this.stories.push(story)
    },

    dropStory(id) {
      const newStories = this.stories.filter(h => h.id !== id);
      this.stories.length = 0
      this.stories.push(...newStories)
    },

    async deleteStory(id) {
      this.isStoriesLoading = true;
      try {
        await fetch(STORIES_URL + `/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(response => {
          if(response.ok) {
            this.dropStory(id)
          }
        })
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
    },

    isStoriesLoading: false,

    setIsStoriesLoading(status) {
      this.isStoriesLoading = status
    },

    async getStories() {
      this.isStoriesLoading = true;
      try {
        let url = `${STORIES_URL}?orders[${this.storesOrder.field}]=${this.storesOrder.order}`;
        if (this.storiesGroupBy !== '') {
          url += '&group=' + this.storiesGroupBy;
        }
        await fetch(url)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            // console.log(data)
            this.stories.length = 0
            this.stories.push(...data)
          })
        // this.stories = (await getStories());
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
    },

    async postStories(newStory) {
      this.isStoriesLoading = true;
      try {
        fetch(STORIES_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newStory)
        }).then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            this.addStory(data)
          });
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
    },

    storesOrder: { field: 'stories.id', order: 'asc' },

    setStoriesOrder(order) {
      this.storesOrder = order
    },


    setError({ message }) {
      this.error = message;
      alert(message);
    }
  }
}