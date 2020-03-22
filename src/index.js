import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchBox from "./components/SearchBox";
import TodoList from "./components/TodoList";


const App = () => {
    const todoData = [
        { lable: 'Drink coffee', important: false},
        { lable: 'Learn React', important: true},
        { lable: 'Have lanch', important: false},
    ]

    return(
        <div>
            <AppHeader/>
            <SearchBox/>
            <TodoList data = {todoData}/>
        </div>

    )
};


ReactDOM.render (<App/>, document.getElementById('root'));