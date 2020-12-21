import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const FavoriteGroupsList = (props) => {

  let { articles } = props
  const userContext = useContext(UserContext)

  if(articles && userContext.user){

    articles = articles.map((article, index) => (
      <ListGroupItem key={index}>
          <Link key={'Add'} to={`/news/favorites/${article.id}`} style={{color: 'green', fontSize: '35px'}}>{article.name}</Link>
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

export default FavoriteGroupsList
