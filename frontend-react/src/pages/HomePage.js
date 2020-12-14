import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = (props) => {

  return (
    <div>
      Home Page
      {
        props.user && 
        <div>
          <h1>Hi {props.user.username}</h1>
        </div>
      }
      {
        !props.isLoggedIn
        ?
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <button onClick={props.handleLogout}>Logout</button>
      }
    </div>
  )
}

export default HomePage
