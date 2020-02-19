import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import * as routes from '../routes/routes';
import { firebase } from '../firebase';
import { AuthContext } from './authContext';


//set interface props expectations to 
interface InterfaceProps {
    //expect persistant auth user
    history?: any;
}

export const userAuthorization = ( condition: any ) => {
    class Authorization extends Component<InterfaceProps,{}>  {
        public componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if(!condition(authUser)) {
                    this.props.history.push(routes.LOGIN);
                }
            });
        }

        public render() {
            return (
                <AuthContext.Consumer>
                    {authUser => (authUser  ? <Component/> 
                                            : null)}
                </AuthContext.Consumer>
            );
        }
    }

    return withRouter(Authorization as any);
}
