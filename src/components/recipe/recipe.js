import React, { useState, useEffect, useContext } from 'react';
import Ingeligents from './ingredent';
import Procedure from './procedure';
import { receipeContext } from '../../shared/receipeContext';
import '../../styles/recipe.scss';

const Recipe = ({match}) => {
  const [ getReceipe ] = useContext(receipeContext);
  const [items, setItems] = useState('');

  useEffect(() => {
    // setItems('hello');
    let x = getReceipe('single', match.params.id);
    console.log(x);
  })

  return (
    <div className="recipe">
      {/* {items.map(item => (
        <div key={item.id}>
          <div className="parallax" style={{
          backgroundImage:`url(${item.imageUrl})`
        }}>
            <div className="para-content">
              <h3>{ item.title }</h3>
              <p>{ item.description }</p>
            </div>
          </div>
          <Ingeligents ingredent={ item.ingredent }/>
          <Procedure 
            beforeYouCook={ item.beforeYouCook } 
            cookingDirection={ item.CookingDirections } />
        </div>
      ))} */}
      <h1>{'HELLO WORLD'}</h1>
    </div>
  )
}


export default Recipe;