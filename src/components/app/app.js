import React, {Component} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../iteam-status-filter/';

import './app.css';

export default class App extends Component {

    state = {
        todoDate: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);

            const newArray = [
                ...todoDate.slice(0, idx),
                ...todoDate.slice(idx + 1)
            ];
            return {
                todoDate: newArray
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoDate}
                    onDeleted={this.deleteItem}/>
            </div>
        );
    }

};
