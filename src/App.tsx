import React from 'react';
import SideBar from './components/navigation/SideBar';
import TopBar from './components/navigation/TopBar';
import './App.css';

function App() {
  return (
    <div className="layout">
      <div className='navigation'>
        <SideBar/>
      </div>
      <div className="content">
        <TopBar/>
        <main>
          
        </main>
      </div>
    </div>
  );
}

export default App;
