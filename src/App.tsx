import React, { useState } from 'react';
import SideBar from './components/navigation/SideBar';
import TopBar from './components/navigation/TopBar';
import './App.css';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('Home')

  return (
    <div className="layout">
      <div className='navigation'>
        <SideBar activePage={activePage} setActivePage={setActivePage}/>
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
