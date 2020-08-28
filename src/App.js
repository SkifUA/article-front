import React from 'react';
import './App.css';
import ArticleTable from "./components/ArticleTable";
import ArticleForm from "./components/ArticleForm";
import StoryTable from "./components/StoryTable";
import StoryForm from "./components/StoryForm";
import { DataStoreProvider } from "./context";
import 'mobx-react-lite/batchingForReactDom';
import ArticleSearch from "./components/ArticleSearch";
import ApplicationWebsocket from "./components/ApplicationWebsocket";
import DeleteApplicationWebsocket from "./components/DeleteApplicationWebsocket";


function App() {

  return (
    <DataStoreProvider>
      <ApplicationWebsocket />
      <DeleteApplicationWebsocket/>
      <h1>Articles</h1>
      <ArticleSearch />
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
