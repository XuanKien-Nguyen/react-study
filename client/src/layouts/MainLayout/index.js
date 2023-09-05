import React, {Fragment, useContext, useEffect, useState} from 'react';
import {LayoutContext} from '../../contexts';
import axios from 'axios';

import Todos from '../../pages/Todos';
import Demo from '../../pages/DemoComponent';

const MainLayout = () => {

    const [todos, setTodos] = useState([])

    const {loading, dispatch} = useContext(LayoutContext);

    useEffect(() => {
        dispatch({type: 'SET_LOADING', payload: true});
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            if (res.status === 200) {
                setTodos(res.data);
            }
        })
        .catch(err => console.log(err))
        .finally(() => {
            setTimeout(() => {
                dispatch({type: 'SET_LOADING', payload: false});
            }, 1000)
        });
    }, [])

    return (
        <Fragment>
            {/* {todos.map(todo => <Todos key={todo.id} todoDetail={todo}/>)} */}
            <Demo />
        </Fragment>
    )
}

export default MainLayout;