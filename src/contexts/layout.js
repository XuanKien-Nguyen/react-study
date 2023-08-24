import React, {useState, createContext} from 'react';

const LayoutContext = createContext();

function LayoutProvider({children}) {
    const [loading, setLoading] = useState(false);

    const initialState = {
        loading,
        setLoading
    };

    return (
        <LayoutContext.Provider value={initialState}>{children}</LayoutContext.Provider>
    )
}

export {LayoutContext, LayoutProvider};