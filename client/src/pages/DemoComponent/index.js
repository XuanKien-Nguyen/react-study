import React, {Fragment, useContext, useEffect} from 'react';
import axios from 'axios';

const Demo = () => {

    useEffect(() => {
        axios.get('/')
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }, [])

    return (
        <Fragment>
            <div>Demo</div>
        </Fragment>
    )
}

export default Demo;