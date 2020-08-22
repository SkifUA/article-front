import React from 'react';
import './App.css';
import ArticleTable from "./components/ArticleTable";
import ArticleForm from "./components/ArticleForm";
// import StoryTable from "./Story/StoryTable";
// import StoryForm from "./Story/StoryForm";
import { DataStoreProvider } from "./context";


function App() {
  return (
    <DataStoreProvider>
      <ArticleTable />
      <ArticleForm />
      <br/>
      {/*<StoryTable />*/}
      {/*<StoryForm />*/}
    </DataStoreProvider>
  );
}

export default App;
