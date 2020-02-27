import React from 'react';
import { withRouter } from 'react-router-dom';
import { ForgotPasswordLink } from '../ForgotPassword/ForgotPassword';
import { RegisterLink } from '../Register/Register';
import { LoginForm } from './LoginForm';
import './Login.css';

const UserLogin = ({ history }: { [key: string]: any }) => (
    <div className="login">
        <div className="rockets-bg">
            <div className="jumbotron content">
                <h1>Log In</h1>
                <LoginForm history={history} />
                <RegisterLink />
                <ForgotPasswordLink/>
            </div>
        </div>
    </div>
);
export const Login = withRouter(UserLogin)