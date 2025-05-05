import React, { useState } from 'react';
import SideBar from './components/navigation/SideBar';
import TopBar from './components/navigation/TopBar';
import './App.css';
import RegistrantsPage from './pages/RegistrantsPage';
import EventsPage from './pages/EventsPage';
import ParticipantsTable from './components/data/ParticipantsTable';

import Profile from './pages/Profile';


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
              <Profile entityData={{ id: '1', fullName: 'John Doe', cpf: '12345678901', tagName: 'John Doe', email: 'john.doe@example.com', postalCode: '12345678' }} closeModalAfterDelete={function (): void {
                throw new Error('Function not implemented.');
              } } apiUrl={''}/>
              <ParticipantsTable eventId='beedfef1-aa49-4e0a-a008-bd1d9b4f4fe4'/>
            </div>
          )}

          {activePage === 'Registrants' && (
            <RegistrantsPage/>
          )}

          {activePage === 'Events' && (
            <EventsPage/>
          )}

        </main>

      </div>

    </div>
  );
}

export default App;