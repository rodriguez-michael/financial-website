import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserAPI from './api/UserAPI';


const App = () => {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // calls method on page load to look for token 
  useEffect(() => {
    getUser()
  }, [])


  // see if there is a user token in local storage
  const getUser = async () => {
    let token = localStorage.getItem('auth-user')
    if(token !== 'null'){
      let response = await UserAPI.getLoggedInUser(localStorage.getItem('auth-user'))
      let data = await response.json()
      if(data.username) {
        setIsLoggedIn(true)
        setUser(data)
      }
    }
  }


  // handle the login by calling user api
  const handleLogin = async (event) => {
    event.preventDefault()
    let userCredentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    let response = await UserAPI.login(userCredentials)
    let data = await response.json()
    if (data.token) {
      localStorage.setItem('auth-user', data.token)
      setIsLoggedIn(true)
      setUser(data.user)
    }
  }


  // handle logout
  const handleLogout = async (event) => {
    localStorage.setItem('auth-user', null)
    setIsLoggedIn(false)
    setUser(null)
    return (
      <Redirect to='/login' />
    )
  }


  // Pass props to login page using render
  const renderLoginPage = () => {
    return (
      <LoginPage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    )
  }

  const renderHomePage = () => {
    return (
      <HomePage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' render={renderHomePage}/>
        <Route exact path='/login' render={renderLoginPage}/>
        <Route exact path='/signup' component={SignupPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
