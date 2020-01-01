import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Landing from './landing';
import Loader from '../../shared/loader';
import { data } from '../../shared/fetch';
import '../../styles/home.scss';
const ReceipeList = React.lazy(() => import('../../shared/receipeList'));

const result = data();

const Home = () => {
  const [receipeData, setReceipeData] = useState(null)
  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipeData(data);
    })
  }, []);
  if(!receipeData) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return(
    <div className="container">
      <div className="landing-page">
        <Landing />
        <div className="landing-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt deserunt quod repellat provident dolore aliquid magni! Accusantium, voluptates itaque! Expedita unde enim magnam rem!</p>
        </div>
      </div>
      <section>
        <h2>top recipes</h2>
        <ReceipeList items = { receipeData } />
        <div className="btn-case">
          <Link to={'/gallery'}>
            <button className="show-more">
              Show all
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}


export default Home;

