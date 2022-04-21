import React, { createContext, useContext, useReducer } from 'react'

//preparing the data layer
export const StateContext = createContext();

//wrap the components and provide the provider
export const StateProvider = ({reducer, intialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
{children}
    </StateContext.Provider>
);

//this is how we can use it inside of a componenet
export const useStateValue = () => useContext(StateContext);