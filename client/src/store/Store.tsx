//store tree
import {
    //1) Applies middleware to dispatch method of the Redux Store
    applyMiddleware,
    //2) combineReducer merges reducers to one
    combineReducers,
    //3) createStore creates Redux store that holds state tree
    createStore,
    //4) Store is TS type used for store
    Store
} from 'redux';
//thunk allows to write action creators that return a FUNCITON instead of an action, delay dispatch of an action or dispatch until a condition is met
import thunk from 'redux-thunk';
//import reducers state type
import {RocketReducer, RocketState} from '../reducers/RocketReducer';

export interface StatsState {
    rocketsState: RocketState;
}

const rootReducer = combineReducers<StatsState>({
    rocketsState: RocketReducer,
});

export default function configureStore(): Store<StatsState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
    return store;
}



