import React,{useState} from 'react';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Header } from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import { Check } from './pages/checkAssignment/check.component';
import { Data } from './data';

function App() {
  const [mainData,setMainData]=useState(Data)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><Homepage data={mainData} /></Route>
        <Route path='/check'><Check data={mainData} /></Route>
      </Switch>
    </div>
  );
}

export default App;
