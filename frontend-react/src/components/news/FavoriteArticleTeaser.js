import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import UserContext from '../../contexts/UserContext'

const FavoriteArticleTeaser = (props) => {

  const { title, author, description, url } = props
  const userContext = useContext(UserContext)

  return (
    <div>
      <h4>{ title }</h4>
      {author && <p>Author: { author }</p>}
      {description && <p>{ description }</p>}
      <h6><a href={url}>{url}</a></h6>
      <Button color="danger">Remove From Favorites</Button>
    </div>
  )
}

export default FavoriteArticleTeaser
