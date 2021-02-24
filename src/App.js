import styles from "./App.module.css"
import React, { Component } from "react";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

class App extends Component {
  state = {
    items: [],
    filteredTodo: [],
    curItems: {
      todo: "",
      key: "",
      done: false,
      isDisabled: false,
    },
  };

  changeTodoHandler = (e) => {
    const item = e.target.value.trim();
    this.setState({
      curItems: {
        todo: item,
        key: item + Math.random(),
        done: false,
        isDisabled: false,
      },
    });
  };

  addTodoHandler = (e) => {
    e.preventDefault();
    const item = this.state.curItems;
    if (item.todo.trim() !== "") {
      const newItems = [...this.state.items, item];
      // console.log(newItems);
      this.setState({
        items: newItems,
        filteredTodo: newItems,
        curItems: {
          todo: "",
          key: "",
        },
      });
    }
  };

  deleteTodoHandler = (index) => {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items,
      filteredTodo: items
    });
  };

  editTodoHandler = (value, key) => {
    // console.log(value, key)
    let items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.todo = value;
      }
    });
    this.setState({
      items: items,
    });
  };

  doneTodoHandler = (key) => {
    let items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.done = !item.done;
        item.isDisabled = !item.isDisabled
      }
    });
    this.setState({items: items});
  };

  clearAllHandler = () => {
    let items = this.state.items;
    items.map(item => item.done === true ? items.splice(items.indexOf(item), 1) : null);
    this.setState({
      items: items,
      filteredTodo: items
    });
  }

  filterHandler = (e) => {
    let items = this.state.items;
    let all = []
    let done = [];
    let undone = [];

    if(e.target.value === "all"){
      all = items
      this.setState({filteredTodo: all})
    }
    
    if(e.target.value === "done"){
      items.forEach(item => {
        if(item.done){
          done.push(item)
        }
      });
      this.setState({filteredTodo: done})
    }
    if(e.target.value === "undone"){
      items.forEach(item => {
        if(!item.done){
          undone.push(item)
        }
      });
      this.setState({filteredTodo: undone})
    }
    
  }

  render() {
    return (
      <div style={{overflowX: "hidden", padding: "1rem"}} className={styles.app}>
        <TodoForm
          add={this.addTodoHandler}
          change={this.changeTodoHandler}
          todo={this.state.curItems.todo}
          clear={this.clearAllHandler}
          totalTodo={this.state.items.length}
          filter={this.filterHandler}
        />
        <TodoList
          // todos={this.state.items}
          delete={this.deleteTodoHandler}
          edit={this.editTodoHandler}
          check={this.doneTodoHandler}
          filter = {this.state.filteredTodo}
        />
      </div>
    );
  }
}

export default App;
