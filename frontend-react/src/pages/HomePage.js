import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'


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
      // color: theme.palette.text.secondary,
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
      <h1>Financial Freedom</h1>
      <hr></hr>
    <div className={classes.root}>
      <Grid container justify = 'center' alignItems="center" spacing={3}>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            {userContext.user ? <h4 >Welcome, <span style={{color: "blue"}}>{userContext.user.first_name} {userContext.user.last_name}</span></h4> : <h4 style={{color: "red"}}>Please <Link to="/login">login</Link> for full functionality!</h4>}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={5} >
          <Paper className={classes.paper}><h5 style={{fontSize: "29px"}}>Know your net worth! How can you be financially free if you don’t know where you stand today and what your goals are for tomorrow?!</h5></Paper>
        </Grid>
        <Grid item xs={12} sm={5} >
          <Paper className={classes.paper}><h5 style={{fontSize: "29px"}} >It’s not enough to just save money. We give you access to the latest finance articles and stock prices that will take your finances to another level!</h5></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6 style={{fontSize: "25px", textDecoration: 'underline'}}>Track Your Net Worth!</h6>
            <p style={{fontSize: "21px"}}>Don't just save money, watch your savings grow. Financial Freedom puts you in touch with your wealth so you can experience the joy of financial security. Automatically track your net worth and see what’s attainable for your money. It’s easy to understand and easy to use. New! Pay your bills from within financial freedom automation tools are coming.</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6 style={{fontSize: "25px", textDecoration: 'underline'}}>Lastest news and stock prices!</h6>
            <p style={{fontSize: "21px"}}>Financial Freedom is the place to come for finance-related articles that will guide you away from getting into debt and out of it. The best personal finance articles to get you on the right track. Whether you’re saving for retirement or just trying to get out of debt, these are the top personal finance tips and tricks from around the web. We also provide you with the latest stock prices in real time. Create an account and follow industries and companies to make better informed buying or selling decisions.</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h6 style={{fontSize: "25px", textDecoration: 'underline'}}>Resources to help Veterans!</h6>
            <p style={{fontSize: "21px"}}>Financial Freedom is a Veteran Owned website focused on helping Veterans and Active Duty Military with their finances. A lot can happen while you’re serving our country. It’s tough to stay on top of your finances and we want to help. That’s why we made this free Web site with financial tools and tips to help you save for the future.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default HomePage
