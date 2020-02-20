import React from 'react';
import {Link} from "react-router-dom";
import * as routes from '../../routes/routes'
import { AuthContext } from '../../firebase/authContext';
import {LogOutBtn}  from '../LogOutBtn/LogOutBtn'

export const Nav = () => (
    <AuthContext.Consumer>
        {authUser => (authUser ? <UserNav/> : null)}
    </AuthContext.Consumer>
)


const UserNav = () => (
    <ul>
        <li>
            <Link to={routes.HOME}>Home</Link>
           
        </li>
        <li>
           <LogOutBtn/>
        </li>
    </ul>
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