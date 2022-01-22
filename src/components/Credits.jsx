import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'; 


export default function Credits(props) {
    const [newCredit, setNewCredit] = useState({
        description: '',
        amount: 0,
        date: ''
    });

    
    const current = new Date();
    const cDate = `${current.getFullYear()}-
    ${current.getMonth()+1}-${current.getDate()}`;
    

    const sortCredit = [].concat(props.credits)
    .sort((a, b) => a.date > b.date ? 1: -1 )
    .map((credit, i) =>
        <tr key = {credit.id}>
            <td>{credit.description}</td> 
             <td>$ {credit.amount}</td>
             <td>{credit.date}</td>
        </tr> 
    );

    const handleAddFunction = (event) => {
        event.preventDefault();
 
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
 
        const newFormData = { ...newCredit};
        newFormData[fieldName] = fieldValue;
 
        setNewCredit(newFormData);
    }

    const handleAddFunction2 = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = parseFloat(event.target.value);
    
        const newFormData = { ...newCredit};
        newFormData[fieldName] = fieldValue;
    
        setNewCredit(newFormData);
    }

    const handleAddFunctionSubmit =(event) => {
        event.preventDefault();
 
        const newContact = {
            id: nanoid(),
            description: newCredit.description,
            amount: newCredit.amount,
            date: cDate
        };
 
        const newContacts = [...props.credits, newContact];
        props.setCredits(newContacts);     
    }
 

  return(
  <div>
   <div className='amount-page'>
   <Link to="/Bank-of-React" 
    id="home-link"
    style={{ textDecoration: 'none' }}>Home</Link>      
    <h1 id='debit-head'>Credits</h1>  
        <table>
            <thead>
                <tr>
                    <th scope='col'> Description</th>
                    <th scope='col'> Amount</th>
                    <th scope='col'> Date</th>
                </tr>
            </thead>
            <tbody>
            {sortCredit}
            </tbody>               
        </table>
            
        <h2>Add Credit</h2>
        <form onSubmit={handleAddFunctionSubmit}>
            <input
                    type="text"
                    name="description" 
                    required="requred" 
                    placeholder='Enter description'
                    onChange={handleAddFunction}
                    id='input1'
                />
                <input
                    type="text"
                    name="amount" 
                    required="requred" 
                    placeholder='Enter amount'
                    onChange={handleAddFunction2}
                />         
                <button type="submit" id='submit-btn'>Add</button>
        </form>
  </div>

  </div>);
}
