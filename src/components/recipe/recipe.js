import React, { useState, useEffect } from 'react';
import Procedure from './procedure';
import Nav from '../../shared/nav';
import { data } from '../../shared/fetch';
import '../../styles/recipe.scss';
import Ingredients from './ingredient';
import Loader from '../../shared/loader';

const result = data();
const Recipe = ({match}) => {
  const [items, setItems] = useState();
  
  useEffect(() => {
    result.allReceipe.then(data => {
      getSpecificData(data, match.params.id);
    });
  }, []);

  const getSpecificData = (data, id) => {
    data.filter(item => {
      if(item._id === id) {
        setItems(item);
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
    </div>
  )
}


export default Recipe;