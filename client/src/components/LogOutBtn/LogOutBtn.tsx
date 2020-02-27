import React from 'react';
import { auth } from '../../firebase';
import './LogOutBtn.css'
export const LogOutBtn = () => {
    return(
    <button className="logout-btn" type="button" onClick={auth.SignOut}>
        Log Out
    </button>
    )
};
