import React from 'react';
import {Link} from "react-router-dom";
import * as routes from '../../routes/routes'
import { AuthContext } from '../../firebase/authContext';
import {LogOutBtn}  from '../LogOutBtn/LogOutBtn'
import './Nav.css'

export const Nav = () => (
    <AuthContext.Consumer>
        {authUser => (authUser ? <UserNav/> : null)}
    </AuthContext.Consumer>
)


const UserNav = () => (
    <nav className="navbar">
        <ul className="nav navbar-nnav">
            <li>
            <LogOutBtn/>
            </li>
        </ul>
    </nav>
  
);
// const NoUserNav = () => {
//     <ul>
//         <li>
//             <li>
//                 <Link to={routes.LOGIN}>Login</Link>
//             </li>
//             <li>
//                 <Link to={routes.REGISTER}>Register</Link>
//             </li>
//         </li>
//     </ul>
// }