import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Experiment from './Experiment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Experiment />, document.getElementById('root'));
registerServiceWorker();
