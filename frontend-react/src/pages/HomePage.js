import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const HomePage = () => {

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
  }));


  const classes = useStyles();


  // Information on cards
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
        <Grid container spacing={6} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
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