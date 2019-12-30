import React from 'react';
import Home from './components/home/home.js';
import Recipe from './components/recipe/recipe.js';
import Gallery from './components/gallery.js';
import './App.scss';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import { receipeProvider as Provider } from './shared/receipeContext';

function App() {
  return (
    <Router>
      <Provider>
        <div className="App">
          <Switch>
            <Route path="/" exact component = { Home } />
            <Route path="/gallery" exact component = { Gallery } />
            <Route path="/recipe/:id" component = { Recipe } />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
