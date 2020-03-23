import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'

const TodoList = ({ data }) => {


    const elements = data.map(el => {
       const {id, ...itemProps} = el
       return (
           <li key ={id} className="list-group-item">
               <TodoListItem {...itemProps}/>
           </li>)
    })

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};

export default  TodoList;