import React from 'react';
import { firebase } from '../firebase';
import { AuthContext } from './authContext';

//set interface props expectations to 
interface Props {
    //expect anything from the optional authUser
    authUser?: any;
}
//set interface state expectations to 
interface State {
     //expect anything from the optional authUser
    authUser?: any;
}

export const Authentication = (Component: any) => {
    class userAuthentication extends React.Component <
        Props, 
        State> {
            constructor(props: any) {
                super(props);

                this.state ={
                authUser: null
                };
            }
        public componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
            
                authUser
                    ? this.setState(() => ({authUser})) 
                    : this.setState(() => ({ authUser: null}));
            });
        }
        public render() {
            const { authUser } = this.state;
            
            
            return(

                <AuthContext.Provider value={authUser}>
                    <Component/>
                </AuthContext.Provider>
            );
        }
    }
    return userAuthentication
};
