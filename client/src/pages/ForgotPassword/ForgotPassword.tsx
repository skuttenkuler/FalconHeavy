import React from 'react';
import { Link } from 'react-router-dom';
import { ForgotForm } from './ForgotForm';

export const ForgotPassword = () => (
    <div>
        <h2> Forgot Password?</h2>
        <ForgotForm/>
    </div>
);

export const ForgotPasswordLink = () => (
    <p>
        <Link to="/forgot-password"> Forgot Password?</Link>
    </p>
)
