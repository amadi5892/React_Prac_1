import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

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
        <ValidationComponent 
        length={this.state.userInput.length} />
        <CharComponent />
      </div>
    )
  }
}

export default App;
