import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sample from './Sample';
import registerServiceWorker from './registerServiceWorker';

const Everything = (
  <div class="everything">
    <App />
    <Sample />
  </div>
)

ReactDOM.render(Everything, document.getElementById('root'));
registerServiceWorker();
