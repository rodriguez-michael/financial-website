import React, { useState, useEffect, useContext } from 'react'
import { PlaidLink } from 'react-plaid-link';
import PlaidAPI from '../../api/PlaidAPI';
import UserContext from '../../contexts/UserContext';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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
    console.log('positives', positives)
    // setNetWorth(positives)
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


  return (
    <div>
      <h1>Net Worth Page</h1>
      {
        plaidLinkToken && userContext.user
        ?

        <div>

          <PlaidLink
            token={plaidLinkToken}
            onSuccess={onSuccess}
            env='sandbox'
            // {...}
          >
            Connect a bank account
          </PlaidLink>

          <div>
            <button onClick={getAccountInfo}>Accounts and Balances</button>
            <button onClick={getTransactions}>Transactions</button>
          </div>
          
          <div>
            {accountInfo 
            && 
            <div>
              <h1 style={{textDecoration: 'underline'}}>NetWorth</h1>
              <h1 style={ {netWorth} >= 0 ? { color:'green'} : {color : 'red'} }>${netWorth}</h1>
              <h6>{accountInfo}</h6>
            </div>
            }
          </div>

          <div>
            {transactions 
            &&
            <div>
              <h1 style={{textDecoration: 'underline'}}>Transactions in Last 30 Days</h1>
              <h6>{transactions}</h6>
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
