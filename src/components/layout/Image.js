import React, { Component } from 'react';

var listOfImages = [];

class Image extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("../../images/", false, /\.(png|jpg|svg)$/)
    );
  }

  render() {
    const imageStyle = {
      width: 300,
      height: 300
    };

    return (
      <div className="Image">
      
        <div className="Container">
          {listOfImages.map((image, index) => (
            <img key={index} src={image} alt="info" sytle={imageStyle}></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Image;