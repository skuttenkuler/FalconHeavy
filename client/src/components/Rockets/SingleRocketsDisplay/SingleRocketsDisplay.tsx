import React, { Component } from "react";
import { AppState } from "../../../redux/reducers";
import { Dispatch, bindActionCreators } from "redux";
import RocketActions from '../../../redux/actions/Actions';
import { GetConnectDispatchPropsType } from "../../../redux/utils/actionCreator";
import { connect } from "react-redux";
import './style.css'

type TStateProps = ReturnType<typeof mapStateToProps>;
// needed to properly type dispatch props type
type TBindActionCreators = typeof RocketActions;
type TDispatchProps = GetConnectDispatchPropsType<TBindActionCreators>;

class SingleRocketsDisplay extends Component < TStateProps & TDispatchProps> {
            render() {
                const {
                  asyncStatus,
                  rockets: [rocket]
                } = this.props.rocket;
                return (
                <div className="rockets-background">
                    <div className="rocket-stats">
                        <h1>Rocket Name</h1>
                        <ul className="engines">
                            <h4>Engines</h4>
                            <li>Number: {}</li>
                            <li>Engine Type: {}</li>
                            <li>Propellant 1: {}</li>
                            <li>Propellant 2: {}</li>
                            <li>Landing Legs: 2</li>
                                <ul className="engine-thrust-vaccum">
                                    <p>Thrust at Sea Level:</p>
                                    <li>Kilonewtons: 420 </li>
                                    <li>Pound-Force: 94000</li>
                                </ul>
                                <ul className="engine-thrust-vaccum">
                                    <p>Thrust in Vaccum:</p>
                                    <li>Kilonewtons: 480 </li>
                                    <li>Pound-Force: 110000</li>
                                </ul>
                                <ul className="first-stage">
                                    <p>First Stage:</p>
                                        <li> Reusable: False</li>
                                        <li> Engines: 1 </li>
                                        <li> Fuel Amount: 44.3 tons</li>
                                        <li> Burn Time: 169 seconds</li>
                                        <ul className="first-stage-engine-thrust">
                                            <p>Thrust at Sea Level:</p>
                                                <li>Kilonewtons: 480 </li>
                                                <li>Pound-Force: 110000</li>
                                            <p>Thrust in Vaccum:</p>
                                                <li>Kilonewtons: 480 </li>
                                                <li>Pound-Force: 110000</li>
                                        </ul>
                                </ul>
                                <ul className="second-stage">
                                    <p>Second Stage:</p>
                                        <li> Engines: 1 </li>
                                        <li> Fuel Amount: 44.3 tons</li>
                                        <li> Burn Time: 169 seconds</li>
                                        <ul className="second-stage-engine-thrust">
                                            <p>Thrust:</p>
                                                <li>Kilonewtons: 31 </li>
                                                <li>Pound-Force: 7000</li>
                                        </ul>
                                </ul>
                        </ul>
                    </div>
                    <div className="rockets">
                        <div className="rocket-buttons">
                            {["Falcon1", "Falcon9", "Falcon Heavy", "Big Falcon Heavy"].map(d => (
                                <button type="button" onClick={this.props.getRocket.bind(this, d)}>
                                    {d}
                                </button>
                            ))}                            
                        </div>
                            <div style={{ margin: 10 }}>
                                {asyncStatus === "INIT" && "Click the button to see a cute dog"}
                                {asyncStatus === "LOADING" && console.log("loading")}
                                {asyncStatus === "SUCCESS" && console.log(rocket.message)}
                            </div>
                        </div>
                    </div>
                
                );
        }
        
    }
    const mapStateToProps = (state: AppState) => ({
        rocket: state.rockets
      });
      const mapDispatchToProps = (dispatch: Dispatch) =>
        bindActionCreators<TBindActionCreators, TDispatchProps>(RocketActions, dispatch);
      
      export default connect<TStateProps, TDispatchProps, {}, AppState>(
        mapStateToProps,
        mapDispatchToProps
      )(SingleRocketsDisplay);


