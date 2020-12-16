import React, { useState, useEffect } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const NewsArticleTeaser = (props) => {

  const { title, author, description, url } = props
  // const [listNumber, setListNumber] = useState(null)
  const [favoritesList, setFavoritesList] = useState(null)




  // get list of favorite articles and set as state
  // to be used for feeding titles and id's into dropdown
  useEffect(() => {
    const getData = async () => {
      if(localStorage.getItem('user') !== 'null'){
      try{
        const response = await NewsAPI.fetchFavoriteLists(localStorage.getItem('auth-user'), Number(localStorage.getItem('user')))
        setFavoritesList(response)
      }
      catch(error){
        console.error(error)
      }
    }
    }
      getData()
  },[]);


  // refresh page when article deleted
  const refreshPage = () => {
    window.location.reload();
  }

  // delete article from favorite list
    let handleClick = (event) => {
    event.preventDefault()
      try{
        console.log('in try', event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('h4').innerHTML,)
        const newArticleObject = {
          title: event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('h4').innerHTML,
          author: event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('h6').innerHTML,
          description: event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('p').innerHTML,
          url: event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('a').innerHTML,
          newslist: Number(event.target.id)
        }
        NewsAPI.addFavoritArticle(localStorage.getItem('auth-user'), newArticleObject)
        refreshPage()
      }
      catch(error){
        console.error(error)
      }
    }

  return (
      <div>
        <h4>{ title }</h4>
        {author && <h6 className='author'>Author: { author }</h6>}
        {description && <p className='description'>{ description }</p>}
        <h6><a href={url}>{url}</a></h6>
        <div>
          {
            localStorage.getItem('user') 
            && 
            <div>
            {
              favoritesList 
              && 
              <div>
                {
                  !props.inDatabase
                  &&
                  <DropdownButton
                    // alignCenter
                    title="Add to Favorites"
                    id="dropdown-basic"
                    variant='success'
                    size="sm"
                  >
                    {favoritesList.map((list, index) => {
                      return <Dropdown.Item key={index} onClick={handleClick} id={list.id} eventKey={list.id}>{list.name}</Dropdown.Item>
                    })}
                  </DropdownButton>
                }
              </div>
            }
            </div>
          }
        </div>
      </div>
  )
}

export default NewsArticleTeaser
