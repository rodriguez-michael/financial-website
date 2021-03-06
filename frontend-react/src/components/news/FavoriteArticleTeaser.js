import React from 'react'
import { Button } from 'reactstrap'
import NewsAPI from '../../api/NewsAPI.js'

const FavoriteArticleTeaser = (props) => {

  const { articleID, title, author, description, url} = props

  const refreshPage = () => {
    window.location.reload();
  }

  // delete article from favorite list
  let handleArticle = (event) => {
    event.preventDefault()
    try{
      NewsAPI.deleteFavoriteArticle(localStorage.getItem('auth-user'), Number(event.target.id))
      refreshPage()
    }
    catch(error){
      console.error(error)
    }
  }

  return (
    <div>
      <h4>{ title }</h4>
      {author && <p>Author: { author }</p>}
      {description && <p>{ description }</p>}
      <h6><a href={url} target="_blank" rel="noreferrer">Read Full Article</a></h6>
      <Button id={articleID} onClick={handleArticle} color="danger" size="sm">Remove From Favorites</Button>
    </div>
  )
}

export default FavoriteArticleTeaser
