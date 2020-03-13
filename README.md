# SpaceX
Explore the flagship rocket of Space X, the Falcon, and compare the stats of all models of the Falcon Rocket

![Alt text](./client/src/assets/images/spaceX.gif?raw=true "Preview")


# Technologies
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start)
* [Firebase](https://firebase.google.com/)
* [Node](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)





# Code Snippets
    Rocket Reducer for redux state management
```Typescript
     
  interface Rockets {
    asyncStatus: asyncStatusTypes;
    rockets: RocketResponse[];
  }
  const initialState: Rockets = {
    asyncStatus: INIT,
    rockets: []
  };
  export default function RocketReducer(
    state: Rockets = initialState,
    action: AppActionObjectTypes
  ): Rockets {
    switch (action.type) {
      case "GET_ROCKET":
        return { ...state, asyncStatus: LOADING };
  
      case "GET_ROCKET_SUCCESS":
        return { asyncStatus: SUCCESS, rockets: [action.payload.response] };

      default:
        return state;
    }
  }
```
User login authentication via Firebase
```Typescript
//set interface props expectations to 
interface Props {
    //expect anything from the optional authUser
    authUser?: any;
}
//set interface state expectations to 
interface State {
     //expect anything from the optional authUser
    authUser?: any;
}

export const Authentication = (Component: any) => {
    class userAuthentication extends React.Component <
        Props, 
        State> {
            constructor(props: any) {
                super(props);

                this.state ={
                authUser: null
                };
            }
        public componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
            
                authUser
                    ? this.setState(() => ({authUser})) 
                    : this.setState(() => ({ authUser: null}));
            });
        }
        public render() {
            const { authUser } = this.state;
            
            
            return(

                <AuthContext.Provider value={authUser}>
                    <Component/>
                </AuthContext.Provider>
            );
        }
    }
    return userAuthentication
};
```
    

# Author
  Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)
    
# References
* [API DB DATA](https://docs.spacexdata.com/?version=latest)
