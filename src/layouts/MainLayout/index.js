import React, {Fragment, useContext, useEffect, useState} from 'react';
import {LayoutContext} from '../../contexts';
import axios from 'axios';

import Todos from '../../pages/Todos';

const MainLayout = () => {

    const [todos, setTodos] = useState([])

    const {setLoading} = useContext(LayoutContext);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setTodos(res.data);
            }
        })
        .catch(err => console.log(err))
        .finally(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        });
    }, [])

    return (
        <Fragment>
            {todos.map(todo => <Todos key={todo.id} todoDetail={todo}/>)}
        </Fragment>
    )
}

export default MainLayout;