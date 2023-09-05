import React, {createContext, useReducer} from 'react';

const LayoutContext = createContext();

function LayoutProvider({children}) {

    const initialState = {
        loading: false,
        user: null,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_LOADING':
              return {
                ...state,
                loading: action.payload,
              };
            case 'SET_USER':
              return {
                ...state,
                loading: action.payload,
              };
            default:
              return state;
          }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LayoutContext.Provider value={{...state, dispatch}}>{children}</LayoutContext.Provider>
    )
}

export {LayoutContext, LayoutProvider};