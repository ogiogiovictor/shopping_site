import React from 'react';
import Login from '../../components/login/login';
import SignUp from '../../components/sign-up/sign-up';

import './auth.css';


const Auththenticate = () => (

    <div className='sign-in-and-sign-up'>
        <Login />
        <SignUp />
    </div>

);

export default Auththenticate;