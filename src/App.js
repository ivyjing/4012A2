import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Header />
      <Switch>
      <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
    <Footer />  
    </div>

  );
}

export default App;
