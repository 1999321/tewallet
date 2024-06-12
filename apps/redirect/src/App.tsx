import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isOS } from './utils/web-api';
import { isInTMA, isTmaPlatform } from './utils/tma-api';
//import { useNavigate } from 'react-router-dom';

function App() {

  //const navigate = useNavigate();

  // if (isInTMA()){
  //   if (isTmaPlatform('ios')) {
  //     console.log('ios');
  //     navigate('192.168.31.171:80');
  //   } else if (isTmaPlatform('android')) {
  //     console.log('android');
  //     navigate('192.168.31.171:80');
  //   } else {
  //     console.log('web');
  //     navigate('192.168.31.171:3000');
  //   }
  // } else {
  //   if (isOS('ios')) {
  //     console.log('ios');
  //     navigate('192.168.31.171:80');
  //   } else if (isOS('android')) {
  //     console.log('android');
  //     navigate('192.168.31.171:80');
  //   } else {
  //     console.log('web');
  //     navigate('192.168.31.171:3000');
  //   }
  // }
  console.log('web');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        kkiro
      </div>
    </div>
  );
}

export default App;
