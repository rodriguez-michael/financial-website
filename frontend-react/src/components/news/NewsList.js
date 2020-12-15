import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import { ListGroup, ListGroupItem } from 'reactstrap';
import NewsArticleTeaser from './NewsArticleTeaser'

const NewsList = (props) => {

  let { articles } = props
  const userContext = useContext(UserContext)
  console.log('newslist', articles)
  console.log(userContext)

  if(articles){
    articles = articles.articles.map((article, index) => (
      <ListGroupItem key={index}>
        <NewsArticleTeaser
          key={article.title}
          title={article.title}
          author={article.author}
          description={article.description}
          url={article.url}
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
