import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import { DataStoreProvider } from "./context";
import 'mobx-react-lite/batchingForReactDom';
import Articles from "./pages/Articles";
import Stories from "./pages/Stories";


function App() {

  return (
    <DataStoreProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Stories />
          </Route>
          <Route path="/articles" exact>
            <Articles/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </DataStoreProvider>
  );
}

export default App;
