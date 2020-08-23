import React from 'react';
import './App.css';
import ArticleTable from "./components/ArticleTable";
import ArticleForm from "./components/ArticleForm";
import StoryTable from "./components/StoryTable";
import StoryForm from "./components/StoryForm";
import { DataStoreProvider } from "./context";
import 'mobx-react-lite/batchingForReactDom'


function App() {
  return (
    <DataStoreProvider>
      <h1>Articles</h1>
      <ArticleTable />
      <ArticleForm />
      <br/>
      <h1>Stories</h1>
      <StoryTable />
      <StoryForm />
    </DataStoreProvider>
  );
}

export default App;
