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

  console.log('account state: ', accountInfo)

  const onSuccess = (token, metadata) => {
    PlaidAPI.sendPublicToken(token)
    console.log('publicToken: ', token)
  };


  useEffect(() => {
    console.log('in effect')
    const createLinkToken = async () => {
      let response = await PlaidAPI.getLinkToken()
      let data = await response.json()
      let linkToken = await data['link_token']
      console.log('linkToken: ', linkToken)
      setPlaidLinkToken(linkToken)
    }

    createLinkToken()

  }, [])


  const getTransactions = async () => {
    setAccountInfo(null)
    let response = await PlaidAPI.getTransactions()
    let data = await response.json()
    setTransactions(data)
    console.log(data)
  }

  const getAccountInfo = async () => {
    setTransactions(null)
    let response = await PlaidAPI.getAccountInfo()
    let data = await response.json()
    setAccountInfo(data)
    console.log(data)
  }



  if(accountInfo){

    let positives = 0

    for(let i = 0; i < accountInfo.length; i++){
      if(accountInfo[i].type.includes('loan') || accountInfo[i].type.includes('credit')){
      positives -= accountInfo[i].balances.current
      // positives.push(accountInfo[i].balances.current)
    }
    else{
      positives += accountInfo[i].balances.current
    }
  }

    if(!netWorth){
      setNetWorth(positives)
    }
  

    // let netWorth = accountInfo.reduce((acc, curr) => acc + curr.balances.current, 0 )
    // console.log('networth', netWorth)

    accountInfo = accountInfo.map((account, index) => (
      // return (
      <p key={index}>
        {account.name} ({account.subtype}) = ${account.balances.current}
       </p>
      // )
    ))
  }


  if(transactions){

    let transactionTotal = transactions.reduce((acc, curr) => acc + curr.amount, 0 )
    console.log('transactions', transactionTotal)

    transactions = transactions.map((transact, index) => (
      // return (
      <p key={index}>
        {transact.name} ({transact.date}) = ${transact.amount}
       </p>
      // )
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
      <h1 style={{fontSize: '60px'}}>Net Worth Page</h1>
      {
        plaidLinkToken && userContext.user
        ?

        <div>

          <PlaidLink style={{backgroundColor:'green', color:'white',padding: '10px 15px', borderRadius: '12px', fontSize: '12px'}}
            token={plaidLinkToken}
            onSuccess={onSuccess}
            env='sandbox'
            // {...}
          >
            CONNECT AN ACCOUNT
          </PlaidLink>
          <hr></hr>

          <div>
            <div className={classes.root}>
              <Button variant="contained" color="primary" onClick={getAccountInfo}>Networth </Button>
              <Button variant="contained" color="secondary" onClick={getTransactions}>Transactions</Button>
            </div>
          </div>

          <div>
            {!accountInfo && !transactions
            && 
            <Alert variant={'info'}>To view networth or transactions click on the buttons above and make sure you have already connected a financial institution!</Alert>
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
          <Alert variant={'danger'}>Must be logged in to view your net worth!</Alert>
          <Link to="/login">Login Now!</Link>
        </div>

      }
    </div>
  )
}

export default NetWorthPage
