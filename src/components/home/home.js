import React, { useEffect, useContext, useState } from 'react';
import Landing from './landing';
import Nav from '../../shared/nav';
import ReceipeList from '../../shared/receipeList';
import { receipeContext } from '../../shared/receipeContext';
import Loader from '../../shared/loader';
import '../../styles/home.scss';


const Home = () => {
  const [ getReceipe ] = useContext(receipeContext);
  const [receipeData, setReceipeData] = useState([]);
  useEffect(()=> {
    const data = getReceipe('all');
    setReceipeData(data);
  })
  if(receipeData.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return(
    <div className="container">
      <Nav />
      <div className="landing-page">
        <Landing />
        <div className="landing-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt deserunt quod repellat provident dolore aliquid magni! Accusantium, voluptates itaque! Expedita unde enim magnam rem!</p>
        </div>
      </div>
      <ReceipeList items = { receipeData } />
    </div>
  );
}


export default Home;

