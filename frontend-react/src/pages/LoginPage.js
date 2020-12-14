import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = (props) => {

  console.log(props)

  if (props.isLoggedIn){
    return (
      <div>
        <button onClick={props.handleLogout}>Logout</button>
        <Link to='/'>Home</Link>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/signup'>Signup</Link>
      </div>
      <h1>Login Page</h1>
      <form onSubmit={props.handleLogin}>
        <label>UserName:</label>
        <input type='text' placeholder='username' name='username' required></input>
        <label>Password:</label>
        <input type='password' placeholder='password' name='password' required></input>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default LoginPage
