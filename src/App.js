import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Navbar from './components/Navbar.jsx'
import Acceuil from './components/Accueil.jsx';
import Parametre from './components/Parametre.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Acceuil}/>
              <Route exact path="/Parametre" component={Parametre}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
