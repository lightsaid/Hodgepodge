import React from 'react';
// import logo from './logo.svg';

// 引入组件
import  { Button }  from 'xzz'

// 加载样式
import 'xzz/dist/index.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <Button>Test</Button>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
