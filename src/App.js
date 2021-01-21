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

  letterHandler = (event) => {
      this.state.userInput.split('') 
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent character={ch} key={index} />;
    });

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
        {charList}
      </div>
    )
  }
}

export default App;
