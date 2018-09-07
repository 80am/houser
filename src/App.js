import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import Header from './component/Header/Header'
import routes from './routes.js'
//import {Route} from 'react-router-dom' 
import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <section>
      <div className="App">
      <Header />
       {routes}
     
      </div>
      </section>
    );
  }
}

export default App;
