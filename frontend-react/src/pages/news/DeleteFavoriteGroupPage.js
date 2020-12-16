import React, {useState} from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import { Redirect } from 'react-router'
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
      <h1>Delete Category</h1>
      <hr></hr>
      <h1>Are you sure you want to delete this category?</h1>
      <button onClick={handleClick}>Yes</button>
    </div>
  )
}

export default DeleteFavoriteGroupPage
