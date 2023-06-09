import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="">
          <div className="navegacion">
            <Header />
          </div>
          <div className="navegacion">
            <MainPages />
          </div>
          

          
          
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
