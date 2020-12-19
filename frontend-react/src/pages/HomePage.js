import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const HomePage = () => {

  const userContext = useContext(UserContext)

  console.log(userContext)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

  }));

  const classes = useStyles();

  // export default function CenteredGrid() {
  //   const classes = useStyles();

  return (
    // <div>
    //   <h1>Home Page</h1>
    //   {
    //     userContext.user 
    //     && 
    //     <div>
    //       <h2>Hi! {userContext.user.first_name} '{userContext.user.username}' {userContext.user.last_name}</h2>
    //     </div>
    //   }
    // </div>
    <div>
      <h1>Financial Site</h1>
      <hr></hr>
    <div className={classes.root}>
      <Grid container justify = 'center' alignItems="center" spacing={3}>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            {userContext.user ? <h4>Welcome, {userContext.user.username}</h4> : <h4 style={{color: "red"}}>Please Login for full functionality!</h4>}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={5} >
          <Paper className={classes.paper}><h5>Why this website is awesome reason 1!</h5></Paper>
        </Grid>
        <Grid item xs={12} sm={5} >
          <Paper className={classes.paper}><h5>Why this website is awesome reason 2!</h5></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6>Info on networth!</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6>Info on news features!</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6>Info on stocks!</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default HomePage
