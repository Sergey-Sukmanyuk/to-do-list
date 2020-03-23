import React from 'react';
import AppHeader from "../AppHeader";
import SearchBox from "../SearchBox";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";

import "./App.css"


const App = () => {
    const todoData = [
        { lable: 'Drink coffee', important: false, id: 1},
        { lable: 'Learn React', important: true, id: 2},
        { lable: 'Have lanch', important: false, id: 3}
    ]

    return(
        <div className='todo-app'>
            <AppHeader todo = {1} done = {3}/>
            <div className="top-panel d-flex">
                <SearchBox/>
                <ItemStatusFilter/>
            </div>

            <TodoList data = {todoData}/>
        </div>

    )
};

export default App;