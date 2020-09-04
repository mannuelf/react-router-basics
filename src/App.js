import React from 'react';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import LearnReact from './pages/LearnReact/LearnReact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <Link
            to="/"
            className="App-link"
          >
            Home
          </Link>
          <Link
            to="/learn-react"
            className="App-link"
          >
            Learn React
          </Link>
          <Link
            to="/about-us"
            className="App-link"
          >
            About us
          </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/learn-react">
          <LearnReact />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function PageNotFound() {
  return <div> <h1>Page Not Found</h1> please go to out homepage and find something there <Link to="/">Click me</Link>  </div>
}

export default App;
