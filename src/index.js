import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let clock = document.getElementById("time");
if(clock){
  setupClock();
  setInterval(()=>{
    setupClock()
  }, 10000);
}

function setupClock(){
  let today = new Date();
  let hour = ('0'+ today.getHours()).slice(-2);
  let mins = ('0'+ today.getMinutes()).slice(-2);
  let time = hour + ":" + mins;
  clock.innerHTML = time;
}

serviceWorker.unregister();
