import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './Pages/CustomerProfile';
import Order from './Pages/Order';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          {/* ORDER ROUTE */}
          <Route path="/" exact>
            <Order/>
          </Route>
          {/* PROFILE ROUTE */}
          <Route path="/profile">
            <Profile/>
          </Route>

          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
