import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/counterComponent';


class App extends Component {
  render() {
    return (

<React.Fragment>
  
     <h1>first Component</h1>     
  
    
      <Counter/>
      </React.Fragment>
    );
  }
}

export default App;
