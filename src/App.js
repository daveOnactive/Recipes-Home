import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faThLarge, faArrowAltCircleRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Loader from './shared/loader';
import Nav from './shared/nav';
library.add(faHome, faThLarge, faPlusCircle, faArrowAltCircleRight);
const Home = React.lazy(() => import('./components/home/home'));
const Gallery = React.lazy(() => import('./components/gallery'));
const Recipe = React.lazy(() => import('./components/recipe/recipe'));


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/recipe/:id" component={Recipe} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
