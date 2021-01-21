import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }
  
  textListener = (event) => {
    this.setState({userInput: event.target.value});
  }
  
  render() {
    return (
      <div>
        <input 
        type="text" 
        onChange={this.textListener}
        value={this.state.userInput} />
        <p>
          {this.state.userInput}
        </p>
      </div>
    )
  }
}

export default App;
