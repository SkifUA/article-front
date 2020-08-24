// import React from "react";
import { baseArticlesUrl } from "./article-service";
import { baseStoriesUrl } from "./story-service";

export function createStore() {

  return {
    articles: [],

    cleanArticles() {
      this.articles.length = 0
    },

    searchName: '',
    searchText: '',
    searchType: '',

    setSearchName(input) {
      this.searchName = input
    },
    setSearchText(input) {
      this.searchText = input
    },
    setSearchType(input) {
      this.searchType = input
    },

    addArticle(article) {
      this.articles.unshift(article)
    },

    isArticlesLoading: false,

    setIsArticlesLoading(status) {
      this.isArticlesLoading = status
    },

    async getArticles() {
      this.isArticlesLoading = true;
      let url = `${baseArticlesUrl}?orders[${this.articleOrder.field}]=${this.articleOrder.order}`;
      url += this.searchName !== '' ? '&scopes[name_cant]=' + this.searchName : '';
      url += this.searchText !== '' ? '&scopes[text_cant]=' + this.searchText : '';
      url += this.searchType !== '' ? '&scopes[article_type_cant]=' + this.searchType : '';
      try {
        await fetch(url)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            this.articles.length = 0
            this.articles.push(...data)
          })
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    async postArticles(newArticle) {
      this.isArticlesLoading = true;
      try {
        fetch(baseArticlesUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newArticle)
        })
          // .then(response => response.json())
          // .then(jsonResponce => {
          //   const data = jsonResponce.data
          //   console.log(data);
          //   this.addArticle(data)
          // });
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    articleOrder: { field: 'id', order: 'asc' },

    setArticlesOrder(order) {
      this.articleOrder = order
    },


    // STORIES
    stories: [],

    cleanStories() {
      this.stories.length = 0
    },

    addStory(story) {
      this.stories.push(story)
    },

    isStoriesLoading: false,

    setIsStoriesLoading(status) {
      this.isStoriesLoading = status
    },

    async getStories() {
      this.isStoriesLoading = true;
      try {
        await fetch(`${baseStoriesUrl}?orders[${this.storesOrder.field}]=${this.storesOrder.order}`)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
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
        console.log(newStory)
        fetch(baseStoriesUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newStory)
        }).then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            console.log(data);
            this.addStory(data)
          });
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
    },

    storesOrder: { field: 'id', order: 'asc' },

    setStoriesOrder(order) {
      this.storesOrder = order
    },


    setError({ message }) {
      this.error = message;
      alert(message);
    }
  }
}