import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({ data }) => {
    const elements = data.map(el => {
       return <li><TodoListItem {...el}/></li>
    })

    return(
        <ul>
            {elements}
        </ul>
    )
};

export default  TodoList;