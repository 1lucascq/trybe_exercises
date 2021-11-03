import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      listItems: [],
      selectedItems: [],
      isDisabled: true,
    };
    
    this.addTodo = this.addTodo.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listItems: [...state.listItems, todo] }));
  }

  removeItem(todo) {
    const { selectedItems, listItems } = this.state;
    const filteredList = listItems.filter((item) => item !== todo);
    const filteredSelected = selectedItems.filter((item) => item !== todo);
    this.setState({ listItems: filteredList });
    this.setState({ selectedItems: filteredSelected });
  }

  selectItem(todoItem) {
    const { selectedItems } = this.state;
    if (!selectedItems.includes(todoItem)) {
      return this.setState((state) => ({ selectedItems: [...selectedItems, todoItem] }));
    }
    const filteredSelected = selectedItems.filter((item) => item !== todoItem);
    this.setState({ selectedItems: filteredSelected });
  }

  render() {
    const { listItems, selectedItems, isDisabled } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          removeItem={(todo) => this.removeItem(todo)}
          selectedItems={selectedItems}
          isDisabled={isDisabled}
          />
        {listItems &&
          <ul>
            {
              listItems.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} selectItem={this.selectItem}/>
                  <button
                    disabled={ !selectedItems.includes(todo) }
                    type="button"
                    onClick={ () => this.removeItem(todo) }
                  >
                    Remover
                  </button>
                </li>
              ))
            }
            
          </ul>
        }
      </div>
    );
  }
}
export default App;
