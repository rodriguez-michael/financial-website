import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const Resources = () => {

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));


  const classes = useStyles();

  
  const cards = [
    {
      title: 'US Cares Emergency Assistance Program',
      description: 'If you’re a veteran struggling to cover basic monthly bills such as rent or utilities. The average amount awarded is $650, which can be really helpful when struggling to make ends meet.',
      url: 'https://www.usacares.org/'
    }, 
    {
      title: 'American Legion Temporary Financial Assistance',
      description: 'Designed to help families with minor children, this program offers cash grants to pay for housing, utilities, food and medical expenses. The goal is to encourage a stable home life for children.',
      url: 'https://www.legion.org/financialassistance'
    },  
    {
      title: 'Operation Family Fund',
      description: 'Veterans who were severely disabled while serving in Operation Enduring and Iraqi Freedom can apply for grants to pay for medical bills, emergency transportation, vehicle repair and housing.',
      url: 'https://operationfamilyfund.org/how-to-apply-for-assistance/'
    },  
    {
      title: "Coalition to Salute America's Heroes",
      description: 'This organization provides financial assistance to veterans who were severely wounded in Iraq and Afghanistan.',
      url: 'https://csah.webauthor.com/go/apply.cfm'
    },  
    {
      title: 'Hope for the Warriors',
      description: 'Provides a full cycle of care to post 9/11 service members, their families and the families of the fallen. Programs include critical care coordination and career transition assistance.',
      url: 'https://www.hopeforthewarriors.org/apply-for-services/'
    },  
    {
      title: 'VA Attendance/Housebound Assistance',
      description: 'If you are a veteran receiving a VA pension, you may be eligible for an increased monthly amount through Aid and Attendance and Housebound Assistance. Veterans who are bedridden or need the services of an aid to help with everyday activities can apply.',
      url: 'https://www.va.gov/pension/aid-attendance-housebound/'
    },  
    {
      title: 'Operation First Response',
      description: 'This organization’s Military Family Assistance Program offers financial relief to wounded veterans and their families as they make their way through the V.A. claim process, which can take up to a year or more. Funds are used to help vets cover immediate needs such as housing, utilities, groceries, clothing and more.',
      url: 'https://www.operationfirstresponse.org/military-family-assistance-program/'
    },  
    {
      title: 'Veterans of Foreign Wars',
      description: "There to help America's military families who have run into unexpected financial difficulties as a result of deployment or other military-related activity or injury. The program provides financial aid grants of up to $1,500 to assist with basic life needs in the form of a grant - not a loan - so no repayment is required.",
      url: 'https://www.vfw.org/assistance/financial-grants'
    },  
    {
      title: 'Semper Fi Fund',
      description: 'The Semper Fi Fund (SFF) provides relief for financial needs that arise during hospitalization and recovery as well as assistance for those with perpetuating needs. Our program provides support in a variety of ways including: Service Member and Family Support, Specialized and Adaptive Equipment, Adaptive Housing, Adaptive Transportation, Education and Career Transition Assistance, Therapeutic Arts and Team Semper Fi.',
      url: 'https://semperfifund.org/'
    }, 
  ];


  return (
    <React.Fragment>
      <hr></hr>
      <h1>Service Member Resources</h1>
      <hr></hr>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{textDecoration: 'underline', fontSize: '20px'}}>
                      {card.title}
                      <hr style={{ background: '#97D38D' }}></hr>
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <a href={`${card.url}`} target="_blank" rel="noreferrer" style={{ color: '#3C8D2F' }}>Visit Website</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

export default Resources
