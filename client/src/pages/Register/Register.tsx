import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import * as routes from '../../routes/routes';
import { RegisterForm } from './RegisterForm';

const RegisterComponent = () => (
    <div>
        <h1>Register</h1>
        <RegisterForm/>
    </div>
) ;

export const RegisterLink = () => (
    <p>
        No account yet? <Link to={routes.REGISTER}>Register</Link>
    </p>
);

export const Register = withRouter(RegisterComponent);