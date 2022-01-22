import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'; 


export default function Debits(props) {

    const [newDebit, setNewDebit] = useState({
        description: '',
        amount: 0,
        date: ''
    });

    const current = new Date();
    const cDate = `${current.getFullYear()}-
    ${current.getMonth()+1}-${current.getDate()}`;
    


    const sortDebit = [].concat(props.debits)
        .sort((a, b) => a.date > b.date ? 1: -1 )
        .map((debit, i) =>
          
                <tr key = {debit.id}>
                    <td>{debit.description}</td> 
                    <td>$ {debit.amount}</td>
                    <td>{debit.date}</td>
                </tr>
            
        );

   const handleAddFunction = (event) => {
       event.preventDefault();

       const fieldName = event.target.getAttribute('name');
       const fieldValue = event.target.value;

       const newFormData = { ...newDebit};
       newFormData[fieldName] = fieldValue;

       setNewDebit(newFormData);
   }

   const handleAddFunction2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = parseFloat(event.target.value);

    const newFormData = { ...newDebit};
    newFormData[fieldName] = fieldValue;

    setNewDebit(newFormData);
    }

   const handleAddFunctionSubmit =(event) => {
       event.preventDefault();

       const newContact = {
           id: nanoid(),
           description: newDebit.description,
           amount: newDebit.amount,
           date: cDate
       };

       const newContacts = [...props.debits, newContact];
       props.setDebits(newContacts);
    
   }

  return(
  <div className='amount-page'>
    <Link to="/Bank-of-React" 
        id="home-link"
        style={{ textDecoration: 'none' }}
    >Home</Link>
    <h1 id='debit-head'>Debits</h1>  
        <table>
              <thead>
                  <tr>
                      <th scope='col'> Description</th>
                      <th scope='col'> Amount</th>
                      <th scope='col'> Date</th>
                  </tr>
              </thead>
              <tbody>
                 {sortDebit}
              </tbody>               
          </table>
            
        <h2>Add Debit</h2>
        <form onSubmit={handleAddFunctionSubmit} className='add'>
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
       
        
  </div>);
}
