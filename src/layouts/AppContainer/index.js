import React, {Fragment} from 'react';
import LoadingLayout from '../LoadingLayout';
import MainLayout from '../MainLayout';

const AppContainer = () => {

    return (
        <Fragment>
            <LoadingLayout>
                <MainLayout />
            </LoadingLayout>
        </Fragment>
    )
}

export default AppContainer;