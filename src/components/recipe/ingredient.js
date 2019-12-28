import React, { useEffect, useState } from 'react';
import Icon from '../../shared/icon';
import '../../styles/recipe.scss';

const Ingredients = ({ingredient}) => {
  // const [ingredients, setIngredients] = useState([]);
  // useEffect(() => {
  //   setIngredients(ingredient);
  // })
  return (
    <div className="ingeligent">
      <h3>
        ingredients
      </h3>
      <div className="ingredient-icons">
        <Icon iconToDisplay={'ingredient'} />
      </div>
      <ol>
        {ingredient === ''? null : ingredient.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>

    </div>
  )
}

export default Ingredients;