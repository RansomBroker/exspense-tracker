import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExspense from './components/IncomeExspense'
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import './App.css';


function App() {
  return (
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
  );
}

export default App;
