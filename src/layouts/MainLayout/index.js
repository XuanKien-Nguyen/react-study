import React, {Fragment, useContext} from 'react';
import {LayoutContext} from '../../contexts';

const MainLayout = () => {

    const {setLoading} = useContext(LoadingLayout);

    return (
        <Fragment>
            MainLayout
        </Fragment>
    )
}

export default MainLayout;