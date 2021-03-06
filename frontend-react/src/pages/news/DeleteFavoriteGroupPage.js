import React, {useState} from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import { Redirect } from 'react-router'
import { Button } from 'reactstrap';

const DeleteFavoriteGroupPage = (props) => {

  const [redirect, SetRedirect] = useState(false)

  // handle delete button clicked
  let handleClick = (event) => {
    event.preventDefault()
    try{
      NewsAPI.deleteFavoriteCategory(localStorage.getItem('auth-user'), props.match.params.listID)
      SetRedirect(true)
    }
    catch(error){
      console.error(error)
    }
  }

  // redirect when delete confirmed
  if (redirect) {
    return <Redirect to = "/news/favorites" />
  }

  return (
    <div>
      <hr></hr>
      <h1>Delete List</h1>
      <hr></hr>
      <h1>Are you sure you want to delete this list?</h1>
      <Button onClick={handleClick} color="danger" size="lg">Yes, Delete List</Button>
    </div>
  )
}

export default DeleteFavoriteGroupPage
