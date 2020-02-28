import * as React from 'react';
import {withRouter} from 'react-router-dom';
import * as routes from '../routes/routes';
import { firebase } from '../firebase';
import { AuthContext } from './authContext';

interface Props {
    history?: any;
  }
  
  export const Authorization = (condition: any) => (Component: any) => {
    class userAuthorization extends React.Component<
        Props, {}> {
          constructor(props: any) {
          super(props);

          
      }
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