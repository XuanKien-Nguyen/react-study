import React, {Fragment, useContext, useEffect} from 'react';
import {LayoutContext} from '../../contexts';

const MainLayout = () => {

    const {setLoading} = useContext(LayoutContext);

    useEffect(() => {
        setLoading(true);
    })

    return (
        <Fragment>
            MainLayout
        </Fragment>
    )
}

export default MainLayout;