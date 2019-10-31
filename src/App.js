import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './components/layout/Header'
//import imageTest from "./images/totoro1.jpg";

// import ImageDisplay from './components/layout/ImageDisplay'
import './App.css';
var listOfImages = [];

class App extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("./images/", false, /\.(png|jpg|svg)$/)
    );
  }
  render() {
    
    return (
      <div className="App">
        <Header />
       
        {listOfImages.map((image, index) => (
          <img key={index} src={image} alt="info"></img>
        ))}
      </div>
    );
  }
}

export default App;
