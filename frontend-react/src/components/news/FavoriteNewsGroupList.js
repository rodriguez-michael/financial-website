import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'
// import NewsAPI from '../../api/NewsAPI.js'

const FavoriteGroupsList = (props) => {

  let { articles } = props
  const userContext = useContext(UserContext)

  if(articles && userContext.user){

    articles = articles.map((article, index) => (
      <ListGroupItem key={index}>
          <Link key={'Add'} to={`/news/favorites/${article.id}`} style={{color: 'green', fontSize: '35px'}}>{article.name}</Link>
      </ListGroupItem>
    ));
  }


  return (
    <div>
        <ListGroup>
          { articles }
        </ListGroup>
    </div>
  )
}

export default FavoriteGroupsList





    // if there is no list create a default one
    // console.log('fave news group list length', articles.length)
    // // if(articles && articles){
    //   // setTimeout(()=>{
    //     let check = 0
    //     while( check < 1){
    //     try{
    //       const categoryNewObject = {
    //         name: 'Default List',
    //         user: userContext.user.id
    //       }
    //       console.log('about to call api')
    //       NewsAPI.newFavoriteCategory(localStorage.getItem('auth-user'), categoryNewObject)
    //     }
    //     catch(error){
    //       console.error(error)
    //     }
      // }, 500)
  //     }
  // }
  // else{