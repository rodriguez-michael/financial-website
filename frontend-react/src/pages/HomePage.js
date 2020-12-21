// import React, {useContext} from 'react'
// import UserContext from '../contexts/UserContext';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { Link } from 'react-router-dom'


// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';


// const HomePage = (props) => {

//   const userContext = useContext(UserContext)

//   // style for material ui grid system
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center'
//     },
//     Button: {
//       marginRight: theme.spacing(0),
//     },
//     title: {
//       marginRight: theme.spacing(2),
//     },

//   }));

//   // style for material ui grid system
//   const classes = useStyles();

//   return (
//     <div >
//       <div className={classes.root}>
//         <Grid container justify = 'center' alignItems="center" spacing={3}>
//           <Grid item xs={12} sm={10} style={{marginTop: '25px'}}>
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}>
//               {userContext.user ? <h4 >Welcome, <span style={{color: "blue"}}>{userContext.user.username}</span></h4> : <h4>Please <Link to="/login">login</Link> for full functionality!</h4>}
//               </Paper>
//           </Grid>
//           <Grid item xs={12} sm={5}>
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}><h5 style={{fontSize: "29px"}} >Know your net worth! How can you <span style={{color: "red"}}>be financially free </span>if you don’t know where you stand today and what your goals are for tomorrow?!</h5></Paper>
//           </Grid>
//           <Grid item xs={12} sm={5} >
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}><h5 style={{fontSize: "29px"}} >It’s <span style={{color: "red"}}>not enough to just save money</span> . We give you access to the latest finance articles and stock prices that will take your finances to another level!</h5></Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}>
//               <h6 style={{fontSize: "25px", textDecoration: 'underline', color: 'blue'}}>Track Your Net Worth!</h6>
//               <p style={{fontSize: "21px"}}>Don't just save money, watch your savings grow. Financial Freedom puts you in touch with your wealth so you can experience the joy of financial security. Automatically track your net worth and see what’s attainable for your money. It’s easy to understand and easy to use. New! Pay your bills from within financial freedom automation tools are coming.</p>
//             </Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}>
//               <h6 style={{fontSize: "25px", textDecoration: 'underline', color: 'blue'}}>Lastest news and stock prices!</h6>
//               <p style={{fontSize: "21px"}}>Financial Freedom is the place to come for finance-related articles that will guide you away from getting into debt and out of it. The best personal finance articles to get you on the right track. Whether you’re saving for retirement or just trying to get out of debt, these are the top personal finance tips and tricks from around the web. We also provide you with the latest stock prices in real time. Create an account and follow industries and companies to make better informed buying or selling decisions.</p>
//             </Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper} style={{backgroundColor: "#F0F8FF"}}>
//               <h6 style={{fontSize: "25px", textDecoration: 'underline', color: 'blue'}}>Resources to help Veterans!</h6>
//               <p style={{fontSize: "21px"}}>Financial Freedom is a Veteran Owned website focused on helping Veterans and Active Duty Military with their finances. A lot can happen while you’re serving our country. It’s tough to stay on top of your finances and we want to help. That’s why we made this free Web site with financial tools and tips to help you save for the future.</p>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   )
// }

// export default HomePage


// ------------------------------------------------------------------

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const HomePage = (props) => {

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

  const tiers = [
    {
      title: 'Resources',
      description: [
        "Financial Freedom is a Veteran Owned website focused on helping Veterans and Active Duty Military with their finances.A lot can happen while you’re serving our country. It’s tough to stay on top of your finances and we want to help. That’s why we made this free Web site with financial resources to help you save for the future."
    ],
    },
    {
      title: 'Net Worth & Transactions',
      description: [
        "Don't just save money, watch your savings grow. Financial Freedom puts you in touch with your wealth so you can experience the joy of financial security. Automatically track your net worth and see what’s attainable for your money. It’s easy to understand and easy to use. New! Pay your bills from within financial freedom automation tools are coming."
      ],
    },
    {
      title: 'News/Stocks',
      description: [
        "Financial Freedom is the place to come for finance-related articles that will guide you away from getting into debt and out of it. We also provide you with the latest stock prices in real time so that you can keep up with the market. Create an account and follow industries and companies to make better informed buying or selling decisions."
      ],
    },
  ];
  
    const classes = useStyles();

  return (
<React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Financial Freedom
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Know your net worth! How can you be financially free if you don’t know where you stand today and what your goals are for tomorrow?!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                  style={{ background: '#97D38D', color: 'white' }}
                />
                <CardContent>
                  <div className={classes.cardPricing} >
                    <Typography component="h2" variant="h3" color="textPrimary" >
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
      
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default HomePage