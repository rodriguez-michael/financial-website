import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";
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
    customColor: {
      // or hex code, this is normal CSS background-color
      backgroundColor: green[500]
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
  }));

  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";

  function changeBackground(e) {
    e.target.style.color = 'white';
  }

  return (
    <React.Fragment>
      <AppBar
        // color={isCustomColor || isCustomHeight ? "primary" : example}
        // className={`${isCustomColor && classes.customColor} ${
        //   isCustomHeight && classes.customHeight
        // }`}
        style={{ background: '#97D38D' }}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title} component={Link} to={'/'} style={{cursor: 'pointer', color: 'white'}} onMouseOver={changeBackground}>
            Financial Freedom
          </Typography>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/banking'} onMouseOver={changeBackground}>
            Banking
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/resources'} onMouseOver={changeBackground}>
            Resources
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/news'} onMouseOver={changeBackground}>
            News
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/news/favorites'} onMouseOver={changeBackground}>
            News Favorites
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/stocks'} onMouseOver={changeBackground}>
            Stocks
          </IconButton>
          <IconButton className={classes.button} color="inherit" component={Link} to={'/stocks/favorites'} onMouseOver={changeBackground}> 
          Stock Favorites
          </IconButton>
          {
            userContext.user 
            ?
            <IconButton className={classes.button} color="inherit" component={Link} to={'/login'} onMouseOver={changeBackground} onClick={handleLogout}>
              Logout
            </IconButton>
            :
            <div>
              <IconButton className={classes.button} color="inherit" component={Link} to={'/login'} onMouseOver={changeBackground}>
                Login
              </IconButton>
              <IconButton className={classes.button} color="inherit" component={Link} to={'/signup'} onMouseOver={changeBackground}>
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