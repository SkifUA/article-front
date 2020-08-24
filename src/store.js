// import React from "react";
import { addArticle, baseArticlesUrl } from "./article-service";
import { addStory, baseStoriesUrl } from "./story-service";

export function createStore() {

  return {
    articles: [],

    addArticle(article) {
      this.articles.unshift(article)
    },

    isArticlesLoading: false,

    setIsArticlesLoading(status) {
      this.isArticlesLoading = status
    },

    async getArticles() {
      this.isArticlesLoading = true;
      try {
        await fetch(`${baseArticlesUrl}?q[sort_by_${this.articleOrder.field}]=${this.articleOrder.order}`)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
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
        this.articles.unshift((await addArticle(newArticle)).data);
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    articleOrder: { field: 'id', order: 'asc' },

    setArticleOrder(order) {
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
        await fetch(`${baseStoriesUrl}?q[sort_by_${this.storesOrder.field}]=${this.storesOrder.order}`)
          .then(response => response.json())
          .then(jsonResponce => {
            const data = jsonResponce.data
            this.cleanStories()
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
        this.articles.unshift((await addStory(newStory)).data);
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