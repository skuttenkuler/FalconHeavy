import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {firebase} from "./firebase"
import  * as routes  from './routes/routes'
import { Authentication } from './firebase/Authentication'
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { ForgotPassword } from './pages/ForgotPassword/ForgotPassword'
class AppComponent extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null}))
    });
  }

  public render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path={routes.LOGIN} component={Login} />
            <Route exact path={routes.REGISTER} component={Register} />
            <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route exact path={routes.HOME} component={Home} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export const App = Authentication(AppComponent);
