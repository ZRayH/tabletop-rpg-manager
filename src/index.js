import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Dice from './game/Dice';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <div>
//     <App title="Welcome to My App"/>
//     <App title="Look at Props in action"/>
//     <App title="Props allow for data driven Components"/>
//     <App title="Props are immutable"/>
//     <App title="Meaning you can't change their value within the Component"/>
//   </div>,
//   document.getElementById('root'));

ReactDOM.render(<Dice />, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

