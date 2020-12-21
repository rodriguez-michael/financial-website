// import React from 'react'

// const Resources = () => {
//   return (
//     <div>
//       <h1>Military Financial Resources</h1>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.usacares.org/" target="_blank" rel="noreferrer">US Cares Emergency Assistance Program</a></h3>
//         <h6>If you’re a veteran struggling to cover basic monthly bills such as rent or utilities. The average amount awarded is $650, which can be really helpful when struggling to make ends meet.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.legion.org/financialassistance" target="_blank" rel="noreferrer">The American Legion Temporary Financial Assistance</a></h3>
//         <h6>Designed to help families with minor children, this program offers cash grants to pay for housing, utilities, food and medical expenses. The goal is to encourage a stable home life for children.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://operationfamilyfund.org/how-to-apply-for-assistance/" target="_blank" rel="noreferrer">Operation Family Fund</a></h3>
//         <h6>Veterans who were severely disabled while serving in Operation Enduring and Iraqi Freedom can apply for grants to pay for medical bills, emergency transportation, vehicle repair and housing.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://csah.webauthor.com/go/apply.cfm" target="_blank" rel="noreferrer">Coalition to Salute America's Heroes</a></h3>
//         <h6>This organization provides financial assistance to veterans who were severely wounded in Iraq and Afghanistan.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.hopeforthewarriors.org/apply-for-services/" target="_blank" rel="noreferrer">Hope for the Warriors</a></h3>
//         <h6>Provides a full cycle of care to post 9/11 service members, their families and the families of the fallen. Programs include critical care coordination and career transition assistance. </h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.va.gov/pension/aid-attendance-housebound/" target="_blank" rel="noreferrer">U.S. Department of Veterans Affairs Aid and Attendance/Housebound Assistance</a></h3>
//         <h6>If you are a veteran receiving a VA pension, you may be eligible for an increased monthly amount through Aid and Attendance and Housebound Assistance. Veterans who are bedridden or need the services of an aid to help with everyday activities can apply.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.operationfirstresponse.org/military-family-assistance-program/" target="_blank" rel="noreferrer">Operation First Response</a></h3>
//         <h6>This organization’s Military Family Assistance Program offers financial relief to wounded veterans and their families as they make their way through the V.A. claim process, which can take up to a year or more. Funds are used to help vets cover immediate needs such as housing, utilities, groceries, clothing and more.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.vfw.org/assistance/financial-grants" target="_blank" rel="noreferrer">Veterans of Foreign Wars</a></h3>
//         <h6>There to help America's military families who have run into unexpected financial difficulties as a result of deployment or other military-related activity or injury. The program provides financial aid grants of up to $1,500 to assist with basic life needs in the form of a grant - not a loan - so no repayment is required.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.operationfirstresponse.org/" target="_blank" rel="noreferrer">Operation First Response</a></h3>
//         <h6>For many veterans and  families, the financial hardship begins quickly and for others it is after the domino effect of extra costs and lost wages. At whatever stage they are in when they contact OFR they are committed to doing all we can to support these families.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://operationhomefront.org/" target="_blank" rel="noreferrer">Operation Home Front</a></h3>
//         <h6>This organization assists immediate family members of those who are wounded, ill, injured or deployed.  Criteria is listed under each type of assistance that may be provided and will guide you to your local chapter. </h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="http://rebuildhope.org/" target="_blank" rel="noreferrer">Rebuild Hope</a></h3>
//         <h6>Rebuild Hope offers an immediate and easy away to help these OEF/OIF families. Our one-of-a-kind, national network “connects” donors to beneficiaries, and we provide complementary services that increase the veteran’s odds of success.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://saluteheroes.org/" target="_blank" rel="noreferrer">Salute Heroes</a></h3>
//         <h6>Since 2004, the Coalition to Salute America’s Heroes has provided disabled American veterans from Operations Iraqi Freedom and Enduring Freedom with millions of dollars worth of Emergency Financial Aid and support services.</h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://semperfifund.org/" target="_blank" rel="noreferrer">Semper Fi Fund</a></h3>
//         <h6>The Semper Fi Fund (SFF) provides relief for financial needs that arise during hospitalization and recovery as well as assistance for those with perpetuating needs. Our program provides support in a variety of ways including: Service Member and Family Support, Specialized and Adaptive Equipment, Adaptive Housing, Adaptive Transportation, Education and Career Transition Assistance, Therapeutic Arts and Team Semper Fi. </h6>
//       </div>
//       <hr></hr>
//       <div>
//         <h3><a href="https://www.redcross.org/" target="_blank" rel="noreferrer">Red Cross</a></h3>
//         <h6>Collaborates with military aid societies in providing financial assistance when an urgent personal or family crisis arises-emergency travel, burial of a loved one or urgent health and welfare such as food and shelter.</h6>
//       </div>  
//     </div>
//   )
// }

// export default Resources

// ----------------------------------------------------------------------------------------------------------
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const Resources = () => {

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
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

  const classes = useStyles();

  return (
    <React.Fragment>
      <hr></hr>
      <h1>Resources</h1>
      <hr></hr>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                    <Button size="small" color="primary" component={Link} to={`${card.url}`}>
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




// <React.Fragment>
//       <CssBaseline />
//       <main>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//               Financial Resources
//             </Typography>
//             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//               These resources are for service members and should be explored if you are having financial hardship and need help.
//             </Typography>
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card} >
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2" style={{textDecoration: 'underline', fontSize: '20px'}}>
//                       {card.title}
//                       <hr style={{ background: '#97D38D' }}></hr>
//                     </Typography>
//                     <Typography>
//                       {card.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" component={Link} to={`${card.url}`}>
//                     <a href={`${card.url}`} target="_blank" rel="noreferrer" style={{ color: '#3C8D2F' }}>Visit Website</a>
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </React.Fragment>