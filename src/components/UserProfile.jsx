import React from 'react';
import {Link} from 'react-router-dom';


const userProfile = (props) => {

    console.log(props)
    return (
        <div className='userProfile-page'>
            
            <h1 id='debit-head'>User Profile</h1>
            <Link to="/Bank-of-React"
                id="home-link" style={{ textDecoration: 'none' }}>Home</Link>
            <div className='userProfile-body'>
                <div>Username: {props.userName}</div>
                <div>Member Since: {props.memberSince}</div>
            </div>
            
        </div>
    );

};

export default userProfile;
