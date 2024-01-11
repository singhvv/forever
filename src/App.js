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
      const rangeX = [(-windowWidth / 2 + buttonWidth / 2) + 80, (windowWidth / 2 - buttonWidth / 2) - 80];
      const rangeY = [(-windowHeight / 2 + buttonHeight / 2) + 80, (windowHeight / 2 - buttonHeight / 2) - 80];
  
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

  const handleYesClick = () => {
    setGifDisplay(true);
    const buttons = document.querySelectorAll('#no, #yes');
    buttons.forEach((button) => {
      button.style.display = 'none';
    });
    const header = document.getElementById('header');
    header.style.display = 'none';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="header">Can we try again? : &#41;</p>
        <div>
          <button id="yes" onClick={handleYesClick}>
            Yes
          </button>
          <button id="no" onMouseMove={handleMouseMovement} onClick={handleMouseMovement}>
            No
          </button>
          </div>
        {gifDisplay && (
          <div className="Gif-container">
            <img
              src="https://media.tenor.com/BuE2vjIr3swAAAAi/hearts-love.gif"
              alt="Cute GIF"
              className="Cute-gif"
            />
            <p className="Gif-text">Text me my sweaty &#60;3</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
