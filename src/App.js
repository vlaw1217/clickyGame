import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Header from './components/layout/Header';
import Image from './components/layout/Image';
import './App.css';


// var listOfImages = [];

class App extends Component {

render() {
  
  return (
    <div className="App">
      <Header />
      <Image />
    </div>
  );
}
}

export default App;
