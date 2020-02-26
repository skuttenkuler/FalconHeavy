//store tree
import {
    //1) Applies middleware to dispatch method of the Redux Store
    applyMiddleware,
    //2) combineReducer merges reducers to one
    combineReducers,
    //3) createStore creates Redux store that holds state tree
    createStore,
    //4) Store is TS type used for store
    //Store
} from 'redux';
//thunk allows to write action creators that return a FUNCITON instead of an action, delay dispatch of an action or dispatch until a condition is met
import thunk from 'redux-thunk';
//import reducers state type
import {RocketReducer, RocketState} from '../reducers/RocketReducer';



const reducers = combineReducers({
    rocket: RocketReducer,
});

export type AppState = ReturnType<typeof reducers>;

const store = createStore(reducers, undefined, applyMiddleware(thunk))
export default store

    




