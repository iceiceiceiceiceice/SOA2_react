import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
//import './css/w3c.css';
//import './css/font.css';
import registerServiceWorker from './registerServiceWorker';
import './Component/css/login.css';
import Loginpage from './Component/Loginpage';

ReactDOM.render(
  <Loginpage 
    islogin={false}
  />,
  document.getElementById('root')
);
registerServiceWorker();


