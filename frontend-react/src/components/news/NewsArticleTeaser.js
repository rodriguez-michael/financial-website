import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import UserContext from '../../contexts/UserContext';


const NewsArticleTeaser = (props) => {

  const { title, author, description, url } = props
  const userContext = useContext(UserContext)

  return (
      <div>
        <h4>{ title}</h4>
        {author && <p>Author: { author }</p>}
        {description && <p>{ description }</p>}
        <h6><a href={url}>{url}</a></h6>
        <div>
          {
            userContext.user 
            && 
            <div>
              <Button color="success">Add To Favorites</Button>
              <Button color="danger">Remove From Favorites</Button>
            </div>
          }
        </div>
      </div>
  )
}

export default NewsArticleTeaser
