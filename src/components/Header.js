import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron>
      <header>
        <h1 className="text-center">Clicky Game</h1>
        <h4 className="text-center">
          Click on an image to earn points, but don't click on any more than
          once!
        </h4>
      </header>
    </Jumbotron>
  );  
}

export default Header;