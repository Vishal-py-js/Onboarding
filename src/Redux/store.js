import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk"
import { userInfoReducer } from "./Onboarding/Reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    onboarding: userInfoReducer,
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;