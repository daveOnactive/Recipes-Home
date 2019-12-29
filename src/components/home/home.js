import React, { useEffect, useContext, useState } from 'react';
import Landing from './landing';
import ReceipeList from '../../shared/receipeList';
import { receipeContext } from '../../shared/receipeContext';
import '../../styles/home.scss';


const Home = () => {
  const [ getReceipe ] = useContext(receipeContext);
  const [receipeData, setReceipeData] = useState([]);
  useEffect(()=> {
    const data = getReceipe('all');
    setReceipeData(data);
  })
  return(
    <div className="container">
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

