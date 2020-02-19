import React from 'react'
//import { db } from "../../firebase";
import { userAuthorization } from '../../firebase/Authorization'


class HomeComponent extends React.Component{
    constructor(props: any){
        super(props);

        this.state ={
            user: null
        };
    }
    public render() {
        return(
            <div>
                <h1>HOME</h1>
            </div>
        )
    }
}
export default HomeComponent;
const authCondition = (authUser: any) => !!authUser;
export const Home = userAuthorization(authCondition)(HomeComponent)