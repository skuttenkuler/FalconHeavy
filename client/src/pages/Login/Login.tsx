import React from 'react';
import { withRouter } from 'react-router-dom';
import { ForgotPasswordLink } from '../ForgotPassword/ForgotPassword';
import { RegisterLink } from '../Register/Register';
import { LoginForm } from './LoginForm';


const UserLogin = ({ history }: { [key: string]: any }) => (
    <div>
        <h1>Log In</h1>
        <LoginForm history={history} />
        <RegisterLink />
        <ForgotPasswordLink/>
    </div>
);
export const Login = withRouter(UserLogin)