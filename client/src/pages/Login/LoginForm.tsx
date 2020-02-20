import React from 'react';
import * as routes from '../../routes/routes';
import { auth } from '../../firebase';

interface InterfaceProps {
    email?: string,
    password?: string,
    history?: any,
    error?:any
}

interface InterfaceState {
    email: string,
    error: any,
    password: string,
}

export class LoginForm extends React.Component<
    InterfaceProps, 
    InterfaceState
    >{
        private static INITIAL_STATE = {
            email: "",
            password: "",
            error: null
        };
        private static propKey(propertyName: string, value: any): object {
            return {[propertyName]: value};
        }
        constructor(props: InterfaceProps){
            super(props);
            this.state = { ...LoginForm.INITIAL_STATE };
        }

        public onSubmit = (event:any) => {
            event.preventDefault();
            const { email, password } = this.state;
            const { history } = this.props;

            auth
                .fbSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState(() => ({ ...LoginForm.INITIAL_STATE }));
                    history.push(routes.HOME);
                })
                .catch(error => {
                    this.setState(LoginForm.propKey("error",error));
                });     
        };
        public render(){
            const { email, password, error } = this.state;
            const InvalidInput = email === "" || email === "";

            return(
                
                <form onSubmit={event => this.onSubmit(event)}>
                    <input value={email} onChange={event => this.setStateWithEvent(event, "email")} type="text" placeholder="Email..."/>
                    <input value={password} onChange={event => this.setStateWithEvent(event, "password")} type="password" placeholder="Password..."/>
                    <button disabled={InvalidInput} type="submit">
                        Log In
                    </button>
                    {error && <p>error.message</p>}
                </form>
            );
         }
         private setStateWithEvent(event: any, columnType: string): void{
             this.setState(LoginForm.propKey(columnType, (event.target as any).value));
         }
    };

