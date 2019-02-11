import React, {Component} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../iteam-status-filter/';
import ItemAddForm from '../item-add-form/';
import './app.css';

export default class App extends Component {
  maxId = 100;
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
    addItem = (text) => {
      const newItem = {
          label: text,
          important: false,
          id : this.maxId++
      };
      this.setState(({todoDate}) =>{
          const newArr = [
              ...todoDate,
              newItem
          ];
          return {
              todoDate: newArr
          }
      });



    };

    onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    };

    onToggleDone = (id) => {
        console.log('Toggle Done', id);
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoDate}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm
                    onItemAdded={this.addItem}/>
            </div>
        );
    }
};
