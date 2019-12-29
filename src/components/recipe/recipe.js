import React, { useState, useEffect, useContext } from 'react';
import Procedure from './procedure';
import { receipeContext } from '../../shared/receipeContext';
import '../../styles/recipe.scss';
import Ingredients from './ingredient';

const Recipe = ({match}) => {
  const [ getReceipe ] = useContext(receipeContext);
  const [items, setItems] = useState({});
  
  useEffect(() => {
    const data = getReceipe('all');
    getSpecificData(data, match.params.id);
    return(() => {
      setItems('');
    });
  });

  const getSpecificData = (data, id) => {
    data.filter(item => {
      if(item._id === id) {
        setItems(item);
      }
      return true;
    });
  };

  return ( 
    <div className="recipe">
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