//the object that bring everything together

//Applies middleware to the dispatch method of the Redux store
 //combineReducers: Merges reducers into one
 //createStore: Creates a Redux store that holds the state tree
 //Store: The TS Type used for the store, or state tree


import { applyMiddleware, combineReducers, createStore, Store } from 'redux';

//Thunk middleware allows you to write action creators that return a FUNCTION instead of an ACTION. Delay the dispatch of an action, or dispatch only if a condition is met.
// The inner function receives the store methods dispatch and getState as parameters.

import thunk from 'redux-thunk';
// Import reducers and state type
import { RocketReducer, RocketState,} from '../reducers/RocketReducer';

// Create an interface for the rocket state
export interface StatsState {
  rocketsState: RocketState;
}

// Create the root reducer
const rootReducer = combineReducers<StatsState>({
  rocketsState: RocketReducer,
});

// Create a configure store function of type `StatsState`
export default function configureStore(): Store<StatsState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}