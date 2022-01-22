import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits'
import AccountBalance from './components/AccountBalance';



const App = () => {

  const [accountBalance, setAccountBalance] = useState(14568.27);  
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);
  const [totalD, setTotalD] = useState("")
  const [currentUser, setCurrentUser] = useState({
    userName : "bob_loblaw",
    memberSince : "08/23/99"
 });

 const getAccountBalance =(credits, debits) => {
  const totalC = credits.reduce((totalC, credit) => totalC + credit.amount,0 );
  const totalDebits = debits.reduce((totalDebit, debit) => totalDebit + debit.amount,0 ); 
  const result = (totalDebits - totalC)
  return parseFloat(result).toFixed(2)
}

  useEffect(() => {
    console.log("test")
    
    
    fetch('https://moj-api.herokuapp.com/debits')
    .then(res => {
        return res.json()
    })
    .then(data => {
      setDebits(data)
    })
  
    fetch('https://moj-api.herokuapp.com/credits')
    .then(resC => {
        return resC.json()
    }) 
    .then(dataC => { 
       setCredits(dataC)
  
    })


}, []);

// console.log(debits)
// console.log(credits);
// console.log(accountBalance);
// console.log(totalD)

  const userInfo = () => (
    <UserProfile userName = {currentUser.userName} 
      memberSince = {currentUser.memberSince}/>
  );
  
  const mockLogIn = (logInInfo) => {
    const newUser = {currentUser}
    newUser.userName = logInInfo.userName
    newUser.memberSince = "08/23/99"
    setCurrentUser(newUser)    
  }

  console.log(credits)
  return (    
    <Router>     
        <Routes>
          <Route exact path="/" element={<Home accountBalance = {accountBalance} />}/>
          <Route exact path="/login" 
            element={<Login user={currentUser} 
            mockLogIn={mockLogIn} />}/>
          <Route exact path="/userProfile" element={userInfo()}/>
          <Route exact path="/debit" element={
            <Debits 
              debits ={debits} 
              accountBalance ={accountBalance}
              // setTotalD = {setTotalD}
              setDebits ={setDebits}/>}
          />
          <Route exact path="/credit" 
                  element={
                  <Credits 
                    credits ={credits} 
                    accountBalance ={accountBalance}
                    setCredits={setCredits} /> }
          />

          
        </Routes>      
      
          <div className='balance'>
            <AccountBalance 
              credits = {credits}
              debits = {debits}
              accountBalance = {accountBalance} 
              getAccountBalance={getAccountBalance} 
            /> 
          </div>
          

    </Router>
  );
};

export default App;
