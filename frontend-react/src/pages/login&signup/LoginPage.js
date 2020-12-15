import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import isLoggedInContext from '../../contexts/isLoggedInContext';

const LoginPage = (props) => {

  const { handleLogin } = props
  const loggedInContext = useContext(isLoggedInContext)

  if (loggedInContext.isLoggedIn){
    return <Redirect to = {`/`} />
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
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
