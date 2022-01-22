import React from 'react';
import {Link} from 'react-router-dom';


const userProfile = (props) => {

    console.log(props)
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>User Profile</h1>
            <div>Username: {props.userName}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    );

};

export default userProfile;
