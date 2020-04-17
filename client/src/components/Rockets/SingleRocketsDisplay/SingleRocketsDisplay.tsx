import  * as React from "react";
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

class SingleRocketsDisplay extends React.Component < TStateProps & TDispatchProps> {
            render() {
                const {
                  asyncStatus,
                  rockets: [rocket]
                } = this.props.rocket;
                console.log(rocket)
                let active = false
                if(rocket){
                    if (rocket.stages === 2){
                        active = true;
                    }
                }
                
                return (
                <div className="rockets-wrapper">
                    <div className="container rocket-stats">
                        
                        {active ? (
                            <div className="row stats">
                            <ul className="engines">
                               <h1 className="rocket-header">{`${rocket.rocket_name}`}</h1>
                               <p>{`${rocket.description}`}</p>
                                    <li className="stat-landing-legs">{`Landing Legs: ${Object(rocket)['landing_legs']['number']}`}</li>
                                    <li className="stat-landing-legs-material">{`Material: ${Object(rocket)['landing_legs']['material']}`}</li>
                                    <ul className="first-stage">

                                    <p>First Stage:</p>
                                        <li className="stat "> {`Reusable:  ${Object(rocket)['first_stage']['reusable']}`} </li>
                                        <li className="stat "> {`Engines:  ${Object(rocket)['first_stage']['engines']}`} </li>
                                        <li className="stat "> {`Fuel Amount:  ${Object(rocket)['first_stage']['fuel_amount_tons']} tons`} </li>
                                        <li className="stat "> {`Burn Time:  ${Object(rocket)['first_stage']['burn_time_sec']} seconds`} </li>
                                        <p>Thrust at Sea Level:</p>
                                                <li className="stat ">{`Kilonewtons:  ${Object(rocket)['first_stage']['thrust_sea_level']['kN']}`} </li>
                                                <li className="stat ">{`Pound-Force:  ${Object(rocket)['first_stage']['thrust_sea_level']['lbf']}`}</li>
                                        <p>Thrust in Vaccum:</p>
                                                <li className="stat ">{`Kilonewtons:  ${Object(rocket)['first_stage']['thrust_vacuum']['kN']}`} </li>
                                                <li className="stat ">{`Pound-Force:  ${Object(rocket)['first_stage']['thrust_vacuum']['lbf']}`}</li>
                                        
                                </ul> 
                                <ul className="second-stage">
                                    <p>Second Stage:</p>
                                    <li className="stat "> {`Engines:  ${Object(rocket)['second_stage']['engines']}`} </li>
                                        <li className="stat "> {`Fuel Amount:  ${Object(rocket)['second_stage']['fuel_amount_tons']} tons`} </li>
                                        <li className="stat "> {`Burn Time:  ${Object(rocket)['second_stage']['burn_time_sec']} seconds`} </li>
                                        <p>Thrust:</p>
                                        <ul className="second-stage-engine-thrust">
                                                <li className="stat ">{`Kilonewtons:  ${Object(rocket)['second_stage']['thrust']['kN']}`} </li>
                                                <li className="stat ">{`Pound-Force:  ${Object(rocket)['second_stage']['thrust']['lbf']}`}</li>
                                        </ul>
                                </ul>  
                        </ul></div>) 
                        : (
                        <div className="stats">
                        <ul className="engines">
                        <h1 className="rocket-header">Falcon 1</h1>
                        <p>The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
                            <li className="stat-landing-legs">Landing Legs: 0</li>
                            <li className="stat-landing-legs-material">Material: null</li>
                          <ul className="first-stage">
                             <p>First Stage:</p>
                                 <li className="stat "> Reusable:  false </li>
                                 <li className="stat "> Engines:  1 </li>
                                 <li className="stat "> Fuel Amount:  44.3 tons</li>
                                 <li className="stat "> Burn Time:  169 seconds </li>
                                 <ul className="first-stage-engine-thrust">
                                     <p>Thrust at Sea Level:</p>
                                         <li className="stat ">Kilonewtons: 420 </li>
                                         <li className="stat ">Pound-Force: 94000</li>
                                     <p>Thrust in Vaccum:</p>
                                         <li className="stat ">Kilonewtons: 480 </li>
                                         <li className="stat ">Pound-Force: 110000</li>
                                 </ul>
                         </ul> 
                         <ul className="second-stage">
                             <p>Second Stage:</p>
                             <li className="stat "> Engines:  1</li>
                                 <li className="stat "> Fuel Amount:  3.38 tons </li>
                                 <li className="stat "> Burn Time: 378 seconds</li>
                                 <ul className="second-stage-engine-thrust">
                                     <p>Thrust:</p>
                                         <li className="stat ">Kilonewtons:  31</li>
                                         <li className="stat ">Pound-Force:  7000</li>
                                 </ul>
                         </ul>  
                         
                 </ul></div>)}
                    </div>
                    <div className="rockets button-wrapper">
                        
                        <div className="rocket-buttons">
                            {["falcon1", "falcon9", "falconheavy", "starship"].map(rocketButton => (
                                <button type="button" className="rocket-button" onClick={this.props.getRocket.bind(this, rocketButton)}>
                                    {rocketButton}
                                </button>
                            ))}                            
                        </div>
                            <div>
                                {asyncStatus === "INIT"}
                                {asyncStatus === "LOADING" && console.log("getting rocket...")}
                                {asyncStatus === "SUCCESS" && console.log(Object(rocket)['first_stage']['burn_time_sec'])}
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


