// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// function getButtonText() {
//   return 'Click on me!';
// }


// Create a react component

// function() { or () => {

const App = () => {
  const buttonText = 'Click me';
  // if writing like below must call it on line 31 as {buttonText.text}
  // const buttonText = { text: 'Click me'};


  return (
    <div>
      {/*Use className and not class below*/}
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      {/*The syntax for html styling in jsx*/}
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {/*The getButtonText is replaced with the text from the function on lines 6-8*/}
        {buttonText}
      </button>
    </div>
  );
};


// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
