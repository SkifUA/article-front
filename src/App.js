import React from 'react';
import './App.css';
import ArticleTable from "./Article/ArticleTable";
import StoryTable from "./Story/StoryTable";


function App() {
  return (
    <div className="App">
      <ArticleTable />
      <div />
      <br/>
      <StoryTable />
    </div>
  );
}

export default App;
