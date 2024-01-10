import React, { useState } from 'react';
import './App.css';

function App() {
  const [gifDisplay, setGifDisplay] = useState(false);

  const handleMouseMovement = (event) => {
    if (event.target.id === 'no') {
      const button = document.getElementById('no');
      const buttonWidth = button.clientWidth;
      const buttonHeight = button.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      // Calculate the range within the window for both X and Y axes
      const rangeX = [(-windowWidth / 2 + buttonWidth / 2) + 30, (windowWidth / 2 - buttonWidth / 2) - 30];
      const rangeY = [(-windowHeight / 2 + buttonHeight / 2) + 30, (windowHeight / 2 - buttonHeight / 2) - 30];
  
      // Function to generate random coordinates within the specified range
      const getRandomCoordinate = (range) => {
        const [min, max] = range;
        return Math.random() * (max - min) + min;
      };
  
      // Generate random X and Y coordinates within the window boundaries
      const newX = getRandomCoordinate(rangeX);
      const newY = getRandomCoordinate(rangeY);
  
      // Apply the transformed position to the button element
      button.style.transform = `translate(${newX}px, ${newY}px)`;
    }
  };
  
  

  const handleNoClick = () => {
    const button = document.getElementById('no');
  };

  const handleYesClick = () => {
    setGifDisplay(true);
    const buttons = document.querySelectorAll('#no, #yes');
    buttons.forEach((button) => {
      button.style.display = 'none';
    });
  
    const headerText = document.querySelector('.App-header p');
    headerText.style.marginBottom = '300px';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Do you wanna come back to me?</p>
        <div>
          <button id="yes" onClick={handleYesClick}>
            Yes
          </button>
          {/* <button id="no" onMouseMove={handleMouseMovement} onClick={handleNoClick}> */}
          <button id="no" onMouseMove={handleMouseMovement} onClick={handleMouseMovement}>
            No
          </button>
        </div>
        {gifDisplay && (
          <img
            src="https://media.giphy.com/media/l41lTyjL2gCWjEverr/giphy.gif"
            alt="Cute GIF"
            className="Cute-gif"
          />
        )}
      </header>
    </div>
  );
}

export default App;
