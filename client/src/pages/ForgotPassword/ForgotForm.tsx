import * as React from 'react';
import { auth } from "../../firebase";


export class ForgotForm extends React.Component {
    private static INITIAL_STATE = {
        email:"",
        error:null
    };

    private static propKey(propertyName: string, value: string) {
        return {[propertyName]: value};

    }
    constructor(props:any) {
        super(props);
        this.state = {...ForgotForm.INITIAL_STATE};
    }
    public onSubmit = (event:any) => {
        event.preventDefault();
        const { email } : any = this.state;
        auth
            .fbPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...ForgotForm.INITIAL_STATE}));
            })
            .catch(error => {
                this.setState(ForgotForm.propKey("error", error));
            });
    };
    public render(){
        const {email, error}:any = this.state;
        const invalidInput = email === "";
        return(
            <form onSubmit={(event) => this.onSubmit(event)}>
                <input value={email} onChange={(event) => this.setStateWithEvent(event, "email")} type="text" placeholder="Email..."/>
                <button disabled={invalidInput} type="submit">
                    Reset Password
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
    private setStateWithEvent(event:any, columnType: string) : void {
        this.setState(
            ForgotForm.propKey(columnType, (event.target as any).value)
        );
    }
}
