// import React from "react";

const baseStoriesUrl = 'http://localhost:3000/stories';

export const getStories = () => {
  fetch(baseStoriesUrl)
    .then(response => response.json())
    .then(stories => {
      console.log(stories.data)
      return stories;
    })
    .catch(error => {
      console.error(error);
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