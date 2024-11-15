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
            columns={['Full Name', 'CPF', 'Email', 'Phone', 'Address', 'ZIP']}
            data={[
              {
                'Full Name': 'Alice Johnson',
                CPF: '123.456.789-10',
                Phone: '(11) 91234-5678',
                Email: 'alice.johnson@example.com',
                Address: '123 Main St, Springfield',
                ZIP: '12345-678',
              },
              {
                'Full Name': 'Bob Smith',
                CPF: '987.654.321-00',
                Phone: '(21) 97654-3210',
                Email: 'bob.smith@example.com',
                Address: '456 Elm St, Metropolis',
                ZIP: '87654-321',
              },
              {
                'Full Name': 'Charlie Brown',
                CPF: '111.222.333-44',
                Phone: '(31) 93456-7890',
                Email: 'charlie.brown@example.com',
                Address: '789 Oak St, Gotham',
                ZIP: '34567-890',
              },
              {
                'Full Name': 'Diana Prince',
                CPF: '222.333.444-55',
                Phone: '(41) 95678-1234',
                Email: 'diana.prince@example.com',
                Address: '159 Maple St, Star City',
                ZIP: '45678-901',
              },
              {
                'Full Name': 'Ethan Hunt',
                CPF: '333.444.555-66',
                Phone: '(51) 91234-5678',
                Email: 'ethan.hunt@example.com',
                Address: '951 Birch St, Central City',
                ZIP: '56789-012',
              },
              {
                'Full Name': 'Fiona Gallagher',
                CPF: '444.555.666-77',
                Phone: '(61) 92345-6789',
                Email: 'fiona.gallagher@example.com',
                Address: '753 Willow St, Smallville',
                ZIP: '67890-123',
              },
              {
                'Full Name': 'George Clooney',
                CPF: '555.666.777-88',
                Phone: '(71) 93456-7890',
                Email: 'george.clooney@example.com',
                Address: '357 Pine St, Riverdale',
                ZIP: '78901-234',
              },
              {
                'Full Name': 'Hannah Montana',
                CPF: '666.777.888-99',
                Phone: '(81) 94567-8901',
                Email: 'hannah.montana@example.com',
                Address: '951 Aspen St, Hill Valley',
                ZIP: '89012-345',
              },
              {
                'Full Name': 'Ian Somerhalder',
                CPF: '777.888.999-00',
                Phone: '(91) 95678-0123',
                Email: 'ian.somerhalder@example.com',
                Address: '159 Cedar St, Mystic Falls',
                ZIP: '90123-456',
              },
              {
                'Full Name': 'Jane Doe',
                CPF: '888.999.000-11',
                Phone: '(11) 96789-1234',
                Email: 'jane.doe@example.com',
                Address: '753 Palm St, Forks',
                ZIP: '01234-567',
              },
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
