import React, { Component } from 'react';
import './App.css';
import Answers from './Answers';

class App extends Component {
  render() {
      let answerModel = ['cow','branch', 'cooper','cat','dog','pig'];
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Phonics App</h2>
        </div>
        <p className="App-intro">
            <h6>Click on the picture that matches the word.</h6>
        </p>
          <Answers data={answerModel} />
      </div>
    );
  }
}

export default App;
