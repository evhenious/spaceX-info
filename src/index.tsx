import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './customSW/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
