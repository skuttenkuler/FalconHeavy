import React from 'react';
import { auth } from '../../firebase';

export const LogOutBtn = () => {
    return(
    <button type="button" onClick={auth.SignOut}>
        Log Out
    </button>
    )
};
