import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {FilterContextProvider} from './contexts/FilterContext';

// Styles
import './styles/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

// Components
import NavBar from './Components/NavBar'


// Pages
import HomePage from './Pages/HomePage'
import ResultsPage from './Pages/ResultsPage';
import Personas from './Pages/Personas';
import CustomFilters from './Pages/CustomFilters';



export default function App() {
  return (
    <>
      <NavBar />
      <FilterContextProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/personas" component={Personas} />
          <Route path="/custom" component={CustomFilters} />
        </Switch>
      </FilterContextProvider>
    </>
  );
}
