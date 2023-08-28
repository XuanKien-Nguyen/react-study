import React, {createContext} from 'react';
import {SET_LOADING} from '../actions';

const LayoutContext = createContext();

function LayoutProvider({children}) {

    const initialState = {
        loading: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_LOADING':
              return {
                ...state,
                loading: action.payload,
              };
            default:
              return state;
          }
    }

    const [globalState, dispatch] = useReducer(reducer, initialState);

    return (
        <LayoutContext.Provider value={{...initialState, dispatch}}>{children}</LayoutContext.Provider>
    )
}

export {LayoutContext, LayoutProvider};