import React, {useState} from 'react';

function AccountBalance(props) {
    
    console.log(props)
 
    // const accountBalance = props.accountBalance
    return (
        <div className='balance-page'>
            Balance: $
           {props.getAccountBalance &&
            props.getAccountBalance(props.credits, props.debits)
           }
        </div>
    );
}

export default AccountBalance;