import React, { useState, useEffect } from 'react';
import Procedure from './procedure';
import Nav from '../../shared/nav';
import { data } from '../../shared/fetch';
import '../../styles/recipe.scss';
import Ingredients from './ingredient';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Loader from '../../shared/loader';
import 'react-sharingbuttons/dist/main.css';

const result = data();
const Recipe = ({match}) => {
  const url = window.location.href;
  const [shareText, setShareText] = useState('');
  const [items, setItems] = useState();
  
  useEffect(() => {
    result.allReceipe.then(data => {
      getSpecificData(data, match.params.id);
    });
  }, []);

  const getSpecificData = (data, id) => {
    data.filter(item => {
      if(item.title === id) {
        setItems(item);
        setShareText(item.title);
      }
      
      return true;
    });
  };

  if(!items) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return ( 
    <div className="recipe">
      <Nav />
      {
        <div key={items.id}>
          <div className="parallax" style={{
          backgroundImage:`url(${items.imageUrl})`
        }}>
            <div className="para-content">
              <h3>{ items.title }</h3>
              <p>{ items.description }</p>
            </div>
          </div>
          <Ingredients ingredient={ items.ingredient }/>
          <Procedure 
            beforeYouCook={ items.beforeYouCook } 
            cookingDirection={ items.cookingDirections } />
        </div>
      }
      <div className="social-btn">
        <p>Share on: </p>
        <Facebook url={url} />
        <Twitter url={url} shareText={`Check out how to prepare ${shareText}`} />
      </div>
    </div>
  )
}


export default Recipe;