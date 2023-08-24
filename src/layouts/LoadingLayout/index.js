import React, {Fragment} from 'react';
import LoadingContainer from './LoadingContainer';

const LoadingLayout = ({loading, children}) => {
    return (
        <Fragment>
            {loading && <LoadingContainer />}
            {children}
        </Fragment>
    )
}

export default LoadingContainer;