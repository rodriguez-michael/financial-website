import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import FavoriteArticleTeaser from './FavoriteArticleTeaser'
import UserContext from '../../contexts/UserContext';

const FavoriteArticlesList = (props) => {

  let { articles } = props
  const userContext = useContext(UserContext)

  console.log('fav article list', articles.articles[0].title)

  if(articles && userContext.user){
    articles = articles.articles.map((article, index) => (
      <ListGroupItem key={index}>
        <FavoriteArticleTeaser
          key={article.id}
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
      {
        userContext.user
        &&
        <ListGroup>
            { articles }
        </ListGroup>
      }

    </div>
  )
}

export default FavoriteArticlesList
