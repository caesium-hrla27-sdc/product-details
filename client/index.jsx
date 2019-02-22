import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

let id = 2;
ReactDOM.render(<App id={id} />, document.getElementById('app-container'));
