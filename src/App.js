import React from 'react';
import './App.css';
//import axios from 'axios';
//import ReactDOM from "react-dom";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import DisplayStrain from './screens/displayStrain';
import AddStrain from './screens/addStrain';
import { Container } from 'react-bootstrap';



export default function App() {
  return (
    <Container>
      <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/strains">Strains</Link>
            </li>
            <li>
              <Link to="/create">Add a Strain</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/strains">
              <DisplayStrain />
            </Route>
            <Route path="/create">
              <AddStrain />
            </Route>
          </Switch>
        
      </Router>
    </Container>
  );
  
}



