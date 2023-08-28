import React, {Fragment, useContext} from 'react';
import {LayoutContext} from '../../contexts';
import LoadingContainer from './LoadingContainer';
import './styles.scss';

const LoadingLayout = ({children}) => {

    const {loading} = useContext(LayoutContext)

    return (
        <Fragment>
            {loading && <LoadingContainer />}
            {children}
        </Fragment>
    )
}

export default LoadingLayout;