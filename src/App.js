import AppHeader from './components/AppHeader';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Dashboard01 from './pages/Dashboard01';
import Dashboard02 from './pages/Dashboard02';
import Dashboard03 from './pages/Dashboard03';
import Dashboard04 from './pages/Dashboard04';
import Dashboard05 from './pages/Dashboard05';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CO2Emissions from './pages/CO2Emissions';
import { useState } from 'react';

function App() {
  
  return (

    <Router>
      <div className="container mx-auto mt-5">
        <AppHeader  />

        <Switch>
         
            <Route path="/" exact  component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard01" component={Dashboard01} />
            <Route path="/dashboard02" component={Dashboard02} />
            <Route path="/dashboard03" component={Dashboard03} />
            <Route path="/dashboard04" component={Dashboard04} />
            <Route path="/dashboard05" component={Dashboard05} />
            <Route path="/co2Emissions" component={CO2Emissions} />
            <Route exact strict component={NotFound}   />



        </Switch>
        {/* 
          <Home />
          <CO2Emissions  />
          <Dashboard01  />
          <Dashboard02  />
          <Dashboard03  /> 
          <Dashboard04  />
          <Dashboard05  />
          <NotFound />
        */}

      </div>
    </Router>
  );
}

export default App;
