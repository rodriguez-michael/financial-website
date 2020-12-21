import React, { useState, useEffect, useContext } from 'react'
import { PlaidLink } from 'react-plaid-link';
import PlaidAPI from '../../api/PlaidAPI';
import UserContext from '../../contexts/UserContext';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Balances from '../../components/networth/Balances';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Transactions from '../../components/networth/Transactions';

const NetWorthPage = () => {

  let [plaidLinkToken, setPlaidLinkToken] = useState(null)
  let [accountInfo, setAccountInfo] = useState(null)
  let [netWorth, setNetWorth] = useState(null)
  let [transactions, setTransactions] = useState(null)
  const userContext = useContext(UserContext)

  useEffect(() => {

    // create link token from plaid ans set as state
    const createLinkToken = async () => {
      let response = await PlaidAPI.getLinkToken()
      let data = await response.json()
      let linkToken = await data['link_token']
      setPlaidLinkToken(linkToken)
    }

    createLinkToken()
  }, [])

  // If link token is recieved from PLAID send publc token to server
  const onSuccess = (token, metadata) => {
    PlaidAPI.sendPublicToken(token)
  };

  // Handle transactions button click
  const getTransactions = async () => {
    setAccountInfo(null)
    let response = await PlaidAPI.getTransactions()
    let data = await response.json()
    setTransactions(data)
  }

  // Handle networht button click
  const getAccountInfo = async () => {
    setTransactions(null)
    let response = await PlaidAPI.getAccountInfo()
    let data = await response.json()
    setAccountInfo(data)
  }

  // Logic to show net worth
  if(accountInfo){

    let positives = 0

    for(let i = 0; i < accountInfo.length; i++){
      if(accountInfo[i].type.includes('loan') || accountInfo[i].type.includes('credit')){
        positives -= accountInfo[i].balances.current
      }
      else{
        positives += accountInfo[i].balances.current
      }
    }

    if(!netWorth){
      setNetWorth(positives)
    }

    accountInfo = accountInfo.map((account, index) => (
      <p key={index}>
        {account.name} ({account.subtype}) = ${account.balances.current}
       </p>
    ))
  }


  // logic to show transactions
  if(transactions){

    transactions = transactions.map((transact, index) => (
      <p key={index}>
        {transact.name} ({transact.date}) = ${transact.amount}
       </p>
    ))
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();


  return (
    <div>
      <hr></hr>
      <h1>Banking</h1>
      <hr></hr>
      {
        plaidLinkToken 
        && 
        userContext.user
        ?
        <div>
          <div>
            <PlaidLink style={{backgroundColor:'green', color:'white',padding: '10px 15px', borderRadius: '12px', fontSize: '12px',marginTop: '12px'}}
              token={plaidLinkToken}
              onSuccess={onSuccess}
              env='sandbox'
              // {...}
            >
              CONNECT AN ACCOUNT
            </PlaidLink>
          </div>

          <div>
            <div className={classes.root}>
              <Button variant="contained" color="primary" onClick={getAccountInfo} style={{marginTop: '25px'}}>Networth </Button>
              <Button variant="contained" color="secondary" onClick={getTransactions} style={{marginTop: '25px'}}>Transactions</Button>
            </div>
          </div>

          <div>
            {!accountInfo && !transactions
            && 
            <Alert variant={'info'} style={{marginTop: '40px'}}>To view networth or transactions click on the buttons above and make sure you have already connected to your financial institution!</Alert>
            }
          </div>
            
          <div>
            {accountInfo 
            && 
            <Balances accountInfo={accountInfo} netWorth={netWorth}/>
            }
          </div>

          <div>
            {transactions 
            &&
            <div>
              <Transactions transactions={transactions}/>
            </div>
            }
          </div>

        </div>
        :
        
        <div>
          <Alert variant={'danger'} style={{marginTop: '50px'}}>Must be logged in to view your banking information!</Alert>
          <Link to="/login" style={{fontSize: '40px', color: 'green'}}>Login Now!</Link>
        </div>
      }
    </div>
  )
}

export default NetWorthPage
