import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var listOfImages = [];

class Image extends Component {
    importAll(r) { 
            return r.keys().map(r);
        }
    
    
    componentWillMount() {    
         listOfImages = this.importAll (
                require.context("../../images/", false, /\.(jpg)$/)   
         )
    };
    

  render() {    
      return (       
          <Container>
              <Row>
                  <Col md={3}>
            
                      {listOfImages.map((image, index) => (
                          <img
                              key={index}
                              src={image}
                              alt=""
                              width={200}
                              height={150}
                          ></img>
            
                      ))}
                  </Col>
                  <Col md={3}>
                      {listOfImages.map((image, index) => (
                          <img
                              key={index}
                              src={image}
                              alt=""
                              width={200}
                              height={150}
                          ></img>
                      ))}
                  </Col>
              </Row>
          </Container>

      );
  }
}

export default Image; 