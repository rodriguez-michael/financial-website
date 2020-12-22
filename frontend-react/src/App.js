import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UserAPI from './api/UserAPI';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage.js'
import LoginPage from './pages/login&signup/LoginPage';
import SignupPage from './pages/login&signup/SignupPage';
import NetWorthPage from './pages/networth/NetWorthPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import NewsPage from './pages/news/NewsPage';
import NewsFavoritesPage from './pages/news/NewsFavoritesPage';
import FavoriteNewsGroupDetailPage from './pages/news/FavoriteNewsGroupDetailPage'
import AddFavoriteGroupPage from './pages/news/AddFavoriteGroupPage'
import EditFavoriteGroupPage from './pages/news/EditFavoriteGroupPage'
import DeleteFavoriteGroupPage from './pages/news/DeleteFavoriteGroupPage'
import StocksPage from './pages/stocks/StocksPage';
import StockFavoritesPage from './pages/stocks/StockFavoritesPage';
import FavoriteStockDetailPage from './pages/stocks/FavoriteStockDetailPage';
import NewAppNav from './components/AppNav/NewAppNav';
import UserContext from './contexts/UserContext.js';
import isLoggedInContext from './contexts/isLoggedInContext.js';


const App = () => {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // calls method on page load to look for token 
  useEffect(() => {
    getUser()
  }, [])


  // see if there is a user token in local storage
  // if there is, call UserApi function getLoggedInUser to get user who is logged in
  // set state accordingly if there is a token
  const getUser = async () => {
    let token = localStorage.getItem('auth-user')
    if(token !== 'null'){
      let response = await UserAPI.getLoggedInUser(localStorage.getItem('auth-user'))
      let data = await response.json()
      if(data.username) {
        setIsLoggedIn(true)
        setUser(data)
        localStorage.setItem('user', data.id)
      }
    }
  }


  // handle login by calling UserApi login function
  // sets token in local storage if there is one
  // sets state for the user and logged in status
  // gets passed to Login Page
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


  // handle logout by clearing local storage of token
  // sets state for user and logged in status
  // gets passed to AppNav for navbar use
  const handleLogout = async (event) => {
    localStorage.setItem('auth-user', null)
    localStorage.setItem('user', null)
    setIsLoggedIn(false)
    setUser(null)
    return (
      <Redirect to='/login' />
    )
  }


  // pass handleLogin to LoginPage using render
  const renderLoginPage = () => {
    return (
      <LoginPage handleLogin={ handleLogin } />
    )
  }


  return (
    <div className="App">
      <BrowserRouter>
        <isLoggedInContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: handleLogin }}>
          <UserContext.Provider value={{ user: user, setUser: handleLogin }}>
            <NewAppNav handleLogout={handleLogout}/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' render={renderLoginPage}/>
              <Route exact path='/signup' component={SignupPage}/>
              <Route exact path='/banking' component={NetWorthPage}/>
              <Route exact path='/resources' component={ResourcesPage}/>
              <Route exact path='/news' component={NewsPage}/>
              <Route exact path='/news/favorites' component={NewsFavoritesPage}/>
              <Route exact path='/news/favorites/new' component={AddFavoriteGroupPage}/>
              <Route exact path='/news/favorites/:listID' component={FavoriteNewsGroupDetailPage}/>
              <Route exact path='/news/favorites/:listID/edit' component={EditFavoriteGroupPage}/>
              <Route exact path='/news/favorites/:listID/delete' component={DeleteFavoriteGroupPage}/>
              <Route exact path='/stocks' component={StocksPage}/>
              <Route exact path='/stocks/favorites' component={StockFavoritesPage}/>
              <Route exact path='/stocks/favorites/:stockID' component={FavoriteStockDetailPage}/>
              <Route exact path="/page-not-found" component={NotFoundPage} />
              <Route render={() => <Redirect to={{pathname: "/page-not-found"}} />} />
            </Switch>
          </UserContext.Provider>
        </isLoggedInContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
