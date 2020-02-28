import * as React from 'react'
import { Authorization } from '../../firebase/Authorization'
import {Nav} from '../../components/Nav/Nav';
import { Rockets } from "../../components/Rockets/Rockets"

import './Home.css'



class HomeComponent extends React.Component{
    constructor(props: any){
        super(props);

        this.state ={
            user: null
        };
    }
    // public componentDidMount() {
    //     db.getUser().then(snapshot =>
    //       this.setState(() => ({ users: snapshot.val() }))
    //     );
    //   }
      public render() {
        // const { users }: any = this.state;
        return(
            
            <div className="MainPage">
                <Nav/>
                    <div className="logo-wrapper">
                        <div className="logo"></div>
                    </div>
                    <div className="wrapper">
                    
                        <div className="jumbotron content">
                            <p>What started as a project to land a miniture greenhouse and grow plants on Mars quickely evolved into making human life Multiplanetary.
                            In 2002, Elon Musk founded SpaceX with an initial goals of reducing costs for space travel and the eventual colonization of Mars.
                            By the end of 2012, Space X had over 40 launches and accumlated close to $4 billion in contract revenue from both the United States Air Force and NASA.
                            The Falcon launch vehicle has become the hallmark of SpaceX's rockets and is the first orbital class rocket capable of reflight.
                            SpaceX's key breakthrough in space travel cost is resusablility by rockets having the ability to launch and land. Currently SpaceX is working on sending privately
                            crewed dragon spacecraft beyond the moon.</p>
                        </div>
                        <div className="bigOlRocket"></div>
                    </div>
                {/* Scroll parallax that slowly fades in Falcon logo */}
                    

                    <Rockets/>
                    
                {/* stats of launches */}
                {/* map of launches */}
                
            </div>
        )
    }
}
export default HomeComponent;
const authCondition = (authUser: any) => !!authUser;
export const Home = Authorization(authCondition)(HomeComponent)