import React from 'react'
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Authorization } from '../../firebase/Authorization'
import {Nav} from '../../components/Nav/Nav';
import Rockets from "../../components/Rockets/Rockets"

import configure, { StatsState } from '../../store/store';
import { getAllRockets } from '../../actions/RocketActions';
import configureStore from '../../store/store';


interface Props {
    store: Store<StatsState>;
}

const HomeComponent: React.SFC<Props> = props => {
    return(
        <div className="MainPage">
            <Nav/>
            {/* <Username users={users} /> */}
            <h1>HOME</h1>
            {/* welcome userName */}
            {/* history of Space x */}
            <p>What started as a project to land a miniture greenhouse and grow plants on Mars quickely evolved into making human life Multiplanetary.
                In 2002, Elon Musk founded SpaceX with an initial goals of reducing costs for space travel and the eventual colonization of Mars.
                By the end of 2012, Space X had over 40 launches and accumlated close to $4 billion in contract revenue from both the United States Air Force and NASA.
                The Falcon launch vehicle has become the hallmark of SpaceX's rockets and is the first orbital class rocket capable of reflight.
                SpaceX's key breakthrough in space travel cost is resusablility by rockets having the ability to launch and land. Currently SpaceX is working on sending privately
                crewed dragon spacecraft beyond the moon.</p>
            {/* what is the app */}
            <p>This is app is for any SpaceX and Falcon9 enthusiants.</p>
            {/* rockets */}
            {/* stats of boosters */}
            <Provider store={props.store}>
                <Rockets/>
            </Provider>
            {/* stats of launches */}
            {/* map of launches */}

        </div>
    );
};
const store = configureStore();
store.dispatch(getAllRockets());

    // public componentDidMount() {
    //     db.getUser().then(snapshot =>
    //       this.setState(() => ({ users: snapshot.val() }))
    //     );
    //   }
        // const { users }: any = this.state;
        


export default HomeComponent;
const authCondition = (authUser: any) => !!authUser;
export const Home = Authorization(authCondition)(HomeComponent)