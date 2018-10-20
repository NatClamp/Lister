import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem.js';

class App extends Component {
  constructor () {
    super() 
    this.state = {
      list:["milk", "cookies", "sprinkles", "unicorns"],
      newToDo: ""
    }
    this.addToDo=this.addToDo.bind(this)
    this.handleFormChange=this.handleFormChange.bind(this)
  }

  addToDo(e) {
    e.preventDefault()
    let newList = this.state.list
    newList.push(this.state.newToDo)
    this.setState({
      list: newList,
      newToDo: ""
    })
    console.log(this.state)
  }

  handleFormChange(e) {
    this.setState({
      newToDo:e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map((item, index) => 
            <ToDoItem key={index} message={item}/>
          )}
        </ul>
          <form onSubmit={this.addToDo}>
            <input type="text" value={this.state.newToDo} onChange={this.handleFormChange}/>
            <button type="submit">
              Add
            </button>
          </form>
          

      </div>
    );
  }
}

export default App;
