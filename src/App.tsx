import React, { useState } from 'react';
import SideBar from './components/navigation/SideBar';
import TopBar from './components/navigation/TopBar';
import './App.css';
import CustomTable from './components/data/CustomTable';

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
            <CustomTable
            columns={['Name', 'Age', 'Role']}
            data={[
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
              { Name: 'Bob', Age: 30, Role: 'Designer' },
              { Name: 'Charlie', Age: 35, Role: 'Manager' },
              { Name: 'Alice', Age: 25, Role: 'Engineer' },
            ]}
          />
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
