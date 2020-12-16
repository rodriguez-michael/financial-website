import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import NewsArticleTeaser from './NewsArticleTeaser'

const NewsList = (props) => {

  let { articles, favoriteArticles } = props

  let listOfFavoriteTitles = []

  // if(articles && favoriteArticles){
  //   // let listOfFavoriteTitles = []
  //   for(let i = 0; i < favoriteArticles.length; i++){
  //     listOfFavoriteTitles.push(favoriteArticles[i].title)
  //   }
  // }

  if(articles && favoriteArticles){
    let articleArrays = []
    for(let i = 0; i < favoriteArticles.length; i++){
      for (let j = 0; j < favoriteArticles[i].articles.length; j++){
          articleArrays.push(favoriteArticles[i].articles[j])
      }
    }

    for(let i = 0; i < articleArrays.length; i++){
      listOfFavoriteTitles.push(articleArrays[i].title)
    }
  }

 
  if(articles){
    articles = articles.articles.map((article, index) => (
      <ListGroupItem key={index}>
        <NewsArticleTeaser
          key={article.title}
          title={article.title}
          author={article.author}
          description={article.description}
          url={article.url}
          inDatabase={listOfFavoriteTitles.includes(article.title) ? true : false}
        />
      </ListGroupItem>
    ));
  }

  return (
    <div>
      <ListGroup>
        { articles }
      </ListGroup>
    </div>
  )
}

export default NewsList
