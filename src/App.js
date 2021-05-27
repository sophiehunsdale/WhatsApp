import React from 'react';
import Sidebar from './Sidebar.js';
import './App.css';
import Chat from './Chat.js';

function App() {
  return (
    //BEM naming convention
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
