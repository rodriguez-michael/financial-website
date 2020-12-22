import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';

const NewAppNav = (props) => {

  const { handleLogout } = props
  const userContext = useContext(UserContext)

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 0
    },
    button: {
      flexGrow: 1,
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
  }));


  const classes = useStyles();


  function changeBackground(e) {
    e.target.style.color = 'white';
  }

  return (
    <React.Fragment>
      <AppBar style={{ background: '#97D38D' }} >
        <Toolbar>
          <Typography variant="h5" className={classes.title} component={Link} to={'/'} style={{cursor: 'pointer', color: 'white', fontSize: '27px'}} onMouseOver={changeBackground} >
            Financial Freedom
          </Typography>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/banking'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
            Banking
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/resources'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
            Resources
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/news'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
            News
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/news/favorites'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
            News Favorites
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/stocks'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
            Stocks
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/stocks/favorites'} onMouseOver={changeBackground} style={{fontSize: '20px'}}> 
          Stock Favorites
          </IconButton>
          {
            userContext.user 
            ?
            <IconButton className={classes.button} color="inherit" component={Link} to={'/login'} onMouseOver={changeBackground} onClick={handleLogout} style={{fontSize: '20px'}}>
              Logout
            </IconButton>
            :
            <div>
              <IconButton className={classes.button} color="inherit" component={Link} to={'/login'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
                Login
              </IconButton>
              <IconButton className={classes.button} color="inherit" component={Link} to={'/signup'} onMouseOver={changeBackground} style={{fontSize: '20px'}}>
                Signup
              </IconButton>
            </div>
          }        
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default NewAppNav