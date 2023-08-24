import React, {Fragment} from 'react';
import LoadingContainer from './LoadingContainer';
import './styles.scss';

const LoadingLayout = ({loading, children}) => {
    return (
        <Fragment>
            {loading && <LoadingContainer />}
            {children}
        </Fragment>
    )
}

export default LoadingLayout;