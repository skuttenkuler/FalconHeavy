import React from 'react';
import * as routes from '../../routes/routes';
import {auth, db } from '../../firebase';


interface InterfaceProps {
    email?: string,
    password1?: string,
    password2?: string,
    usersname?: string,
    history?: any,
    error?:any,
}
interface InterfaceState {
    email: string,
    password1: string,
    password2: string,
    username: string,
    error: any
}

export class RegisterForm extends React.Component<
    InterfaceProps,
    InterfaceState
    >{
        private static INITIAL_STATE ={
            email: "",
            password1: "",
            password2: "",
            username: "",
            error: null
        };
        private static propKey(propertyName: string, value:any): object {
        return {[propertyName]: value};
        }
        constructor(props: InterfaceProps){
            super(props);
            this.state = {...RegisterForm.INITIAL_STATE};

        }
        public onSubmit(event:any){
            event.preventDefault();
            const {email, password1, username } = this.state;
            const {history} = this.props;

            auth
                .fbCreateUserWithEmailAndPassword(email,password1)
                .then((authUser: any) => {
                    db.fbCreateUser(authUser.user.uid, username, email)
                    .then(() => {
                        this.setState(() => ({...RegisterForm.INITIAL_STATE}));
                        history.push(routes.LOGIN);
                    })
                    .catch(error => {
                        this.setState(RegisterForm.propKey("error",error));
                    });
                })
                .catch(error => {
                    this.setState(RegisterForm.propKey("error",error));
                });
        }
        public render() {
            const { username, email, password1, password2, error} = this.state;

            const invalidInput = password1 !== password2 || password1 === "" || email === "" || username === "";

            return(
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input value={username} onChange={event => this.setStateWithEvent(event, "username")} type="text" placeholder="Username" />
                    <input value={email} onChange={event => this.setStateWithEvent(event, "email")} type="text" placeholder="Email Address" />
                    <input value={password1} onChange={event => this.setStateWithEvent(event, "password1")} type="password" placeholder="Password" />
                    <input value={password2} onChange={event => this.setStateWithEvent(event, "password2")} type="password" placeholder="Confirm Password" />
                    <button disabled={invalidInput} type="submit">
                        Sign Up
                    </button>
                    {error && <p>{error.message}</p>}
                </form>
            );
        }

        private setStateWithEvent(event: any, columnType: string) {
            this.setState(RegisterForm.propKey(columnType, (event.target as any).value));
        }
    }
