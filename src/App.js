import React from 'react';
import Home from './components/home/home.js';
import Nav from './components/nav'
import Recipe from './components/recipe/recipe.js';
import Gallery from './components/gallery.js';
import './App.scss';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';


export const context = React.createContext();

function App() {

  const items = {
    "show": true
  }
  return (
    <Router>
      <context.Provider value={items}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component = { Home } />
            <Route path="/gallery" exact component = { Gallery } />
            <Route path="/recipe/:id" component = { Recipe } />
          </Switch>
        </div>
      </context.Provider>
    </Router>
  );
}

export default App;
