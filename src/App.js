import React from "react";
import "./App.css";
import Onboarding from "./Pages/Onboarding";
import { Provider } from "react-redux";
import store from "./Redux/store";


export default function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Onboarding /> 
      </div>
    </Provider>
  );
}
