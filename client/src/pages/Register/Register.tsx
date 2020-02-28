import * as React from 'react';
import {Link, withRouter } from 'react-router-dom';
import * as routes from '../../routes/routes';
import { RegisterForm } from './RegisterForm';
import './Register.css'
const RegisterComponent = () => (
    <div className="register">
        
        <RegisterForm/>
    </div>
) ;

export const RegisterLink = () => (
    <p>
        No account yet? <Link to={routes.REGISTER}>Register</Link>
    </p>
);

export const Register = withRouter(RegisterComponent);