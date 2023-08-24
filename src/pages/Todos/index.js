import React, {Fragment} from 'react';

const Todo = ({todoDetail}) => {

    const {userId, id, title, complete} = todoDetail

    return (
        <Fragment>
            <div>userID: {userId} - ID: {id} - Title: {title} - Status: {complete ? 'Completed' : 'Not'}</div>
        </Fragment>
    )
}

export default Todo;