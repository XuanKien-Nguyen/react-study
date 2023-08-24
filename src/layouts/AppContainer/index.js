import React, {Fragment, useContext} from 'react';
import {LayoutContext} from '../../contexts';
import LoadingLayout from '../LoadingLayout';
import MainLayout from '../MainLayout';

const AppContainer = () => {

    const {loading} = useContext(LayoutContext);

    return (
        <Fragment>
            <LoadingLayout loading={loading}>
                <MainLayout />
            </LoadingLayout>
        </Fragment>
    )
}

export default Layout;