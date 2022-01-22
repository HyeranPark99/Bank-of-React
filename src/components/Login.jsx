import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {Link} from 'react-router-dom'


const Login = (props) => {
   
    const [redirect, setRedirect] = useState(false);
   
    const [formValue, setFormValue] = useState ({
        userName : "",
        password : ""     
    });

    const handleChange = (e) => {
       const {name, value} = e.target;
       setFormValue((prevState) => {
           return {
               ...prevState, [name]:value
           }
       }) 
    }
  
    const {userName, password} = formValue;

    const handleSubmit = (e) => {
        e.preventDefault()
        setRedirect(true)
        props.mockLogIn(formValue)
        
    }

    console.log(redirect)
    console.log(formValue)

    if(redirect === true){
            
            return (<Navigate to="/userProfile" />

            )
    }
     
    
    return (
        <div>
            <div className="login-header">
                <h1 id="login-header">Log In</h1>
                <Link to="/" id="home-link" style={{ textDecoration: 'none' }}>Home</Link>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">                
                <div id="user-login">                  
                    <label htmlFor="userName">User Name: </label>
                    <input type="text" name= "userName" onChange={handleChange}
                        value={userName} />
                </div>
                <br />
                <div id="password-login">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}
                        value={password} />
                </div>
                <button id="login-btn">Log In</button>
            </form>
        </div>
    )
    
}

export default Login;