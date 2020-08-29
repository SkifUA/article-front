import React from "react";
import {useDataStore} from "../context";
import Input from "./Elements/Input";

const ArticleSearch = () => {
  const { setSearchArticleName, getArticles, setSearchArticleText, setSearchArticleType } = useDataStore();

  const [articleName, setArticleName] = React.useState('')
  const [articleType, setArticleType] = React.useState('')
  const [articleText, setArticleText] = React.useState('')

  const nameArticleSearchHandler = (event) => {
    setArticleName(event.target.value)

    setSearchArticleName(event.target.value)
    getArticles()
  }

  const typeArticleSearchHandler = (event) => {
    setArticleType(event.target.value)

    setSearchArticleType(event.target.value)
    getArticles()
  }

  const textArticleSearchHandler = (event) => {
    setArticleText(event.target.value)

    setSearchArticleText(event.target.value)
    getArticles()
  }


  return (
    <React.Fragment>
      <Input
        value={articleName}
        label="Search Name"
        placeholder="Search in Name "
        handler={nameArticleSearchHandler}
      />
      <Input
        value={articleType}
        label="Search Type"
        placeholder="Search in Type "
        handler={typeArticleSearchHandler}
      />
      <Input
        value={articleText}
        label="Search Text"
        placeholder="Search in Text "
        handler={textArticleSearchHandler}
      />
    </React.Fragment>
  )
}

export default ArticleSearch