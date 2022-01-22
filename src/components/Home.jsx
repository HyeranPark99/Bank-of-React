import React  from 'react';
import {Link} from 'react-router-dom'

const Home =(props) => {

  

    return (
      <div className='home-page'>
          <img src="https://www.lgcounsel.com/wp-content/uploads/2013/04/Header.Bank_2.jpg" alt="bank" id='home-img'/>
          <span> 
             <Link to="/login" id='login-link' style={{ textDecoration: 'none' }}>Log in</Link>
             <Link to="/userProfile" id='profile-link'style={{ textDecoration: 'none' }}>User Profile</Link>
             <Link to="/debit" id='debit-link'style={{ textDecoration: 'none' }}>Debit Information</Link>
             <Link to="/credit" id='credit-link'style={{ textDecoration: 'none' }}>Credit Information</Link>      
          </span> 
           <h1 className='home-title'>Bank of React</h1>            
      </div>
      
    );
  };
  
  export default Home;
  