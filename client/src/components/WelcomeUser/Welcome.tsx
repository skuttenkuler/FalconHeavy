import * as React from 'react';
import { AuthContext } from '../../firebase/authContext';
import { Authorization } from '../../firebase/Authorization';



export const WelcomeUser = () => (
    <AuthContext.Consumer>
        {authUser => (
            <div>
                <h1>Welcome {(authUser as any).username}</h1>
            </div>
        )}
    </AuthContext.Consumer>
);

const condition = (authUser: any ) => !!authUser;
export const Username = Authorization(condition)(WelcomeUser);