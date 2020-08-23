import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExspense from './components/IncomeExspense'
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import {GlobalProvider} from './context/GlobalContext';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <div className="container">
          <Header/>
          <div className="card col-3">
            <div className="card-body col-12">
              <Balance/>
              <IncomeExspense/>
              <History/>
              <NewTransaction/>
            </div>
          </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
