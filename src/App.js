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

  deleteHandler = (index) => {
      const text = this.state.userInput.split(''); // created an array of chars
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText});
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent character={ch} key={index} clicked={() => this.deleteHandler(index)} />;
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
