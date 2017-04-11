import React, { Component } from 'react';
import './App.css';
import Answers from './Answers';
import './styles/styles.css'

class App extends Component {
  render() {
      let answerModel = ['cow','cat','dog','pig'];
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Phonics App</h1>
        </div>
          <Answers data={answerModel} />
      </div>
    );
  }
}

export default App;
