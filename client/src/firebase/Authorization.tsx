import React from 'react';
import {withRouter} from 'react-router-dom';
import * as routes from '../routes/routes';
import { firebase } from '../firebase';
import { AuthContext } from './authContext';

interface InterfaceProps {
    history?: any;
  }
  
  export const Authorization = (condition: any) => (Component: any) => {
    class userAuthorization extends React.Component<
        InterfaceProps, {}> {
            public componentDidMount() {
                firebase.auth.onAuthStateChanged(authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(routes.LOGIN);
                    }
                });
            }
  
      public render() {
        return (
          <AuthContext.Consumer>
            {authUser => (authUser ? <Component /> : null)}
          </AuthContext.Consumer>
        );
      }
    }
  
    return withRouter(userAuthorization as any);
  };