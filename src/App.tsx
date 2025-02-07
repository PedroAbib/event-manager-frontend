import React, { useState } from 'react';
import SideBar from './components/navigation/SideBar';
import TopBar from './components/navigation/TopBar';
import './App.css';
import RegistrantsPage from './pages/RegistrantsPage';

const mainPage = 'Home';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>(mainPage);

  return (
    <div className="layout">

      <div className='navigation'>
        <SideBar activePage={activePage} setActivePage={setActivePage}/>
      </div>

      <div className="content">

        <TopBar title={activePage}/>

        <main className='main-content'>

          {activePage === 'Home' && (
            <div>
              Implement Home Page
            </div>
          )}

          {activePage === 'Registrants' && (
            <RegistrantsPage/>
          )}

          {activePage === 'Events' && (
            <div>
              Implement Events Page
            </div>
          )}

        </main>

      </div>

    </div>
  );
}

export default App;