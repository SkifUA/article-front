import React from "react";
import {useDataStore} from "../context";
import Input from "./Elements/Input";

const ArticleSearch = () => {
  const { setArticleNameOrTextSearch, getArticles } = useDataStore();

  const [inputNameOrTextSearch, setInputNameOrTextSearch] = React.useState('');

  const articleNameOrTextSearchHandler = (event) => {
    setArticleNameOrTextSearch(event.target.value);

    setInputNameOrTextSearch(event.target.value);
    getArticles()
  }


  return (
    <div className="form-group">
      <Input
        value={inputNameOrTextSearch}
        label="Search By Name or Text"
        placeholder="By Name or Text "
        handler={articleNameOrTextSearchHandler}
      />
    </div>
  )
}

export default ArticleSearch