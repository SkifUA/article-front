// import React from "react";
import { getArticles, addArticle } from "./article-service";
import { getStories, addStory } from "./story-service";

export function createStore() {

  return {
    articles: [
      {
        id: 1
      }
    ],

    addArticle(article) {
      this.articles.unshift(article)
    },
    stories: [],

    addStory(story) {
      this.stories.push(story)
    },

    isArticlesLoading: false,

    isStoriesLoading: false,

    async getArticles() {
      this.isArticlesLoading = true;
      try {
        this.articles = (await getArticles());
      } catch (e) {
        this.setError(e);
      }
      this.isArticlesLoading = false;
    },

    async getStories() {
      this.isStoriesLoading = true;
      try {
        this.articles = (await getStories());
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
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

    async postStories(newStory) {
      this.isStoriesLoading = true;
      try {
        this.articles.unshift((await addStory(newStory)).data);
      } catch (e) {
        this.setError(e);
      }
      this.isStoriesLoading = false;
    },


    setError({ message }) {
      this.error = message;
      alert(message);
    }
  }
}