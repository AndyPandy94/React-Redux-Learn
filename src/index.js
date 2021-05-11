// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component

// function() { or () => {

const App = () => {
    return <div>Hi There friends! </div>;
};


// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
