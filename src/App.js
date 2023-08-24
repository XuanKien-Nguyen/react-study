import React from 'react';
import {LayoutProvider} from './contexts';
import AppContainer from './layouts/AppContainer';

const App = () => {

        return (
            <LayoutProvider>
                <AppContainer />
            </LayoutProvider>
        );

}

export default App;
