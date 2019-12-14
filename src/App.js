import React from 'react';
import Home from './components/home/home.js';
import Nav from './components/nav'
import Recipe from './components/recipe/recipe.js';
import './App.scss';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component = { Home } />
          <Route path="/recipe/:id" component = { Recipe } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
