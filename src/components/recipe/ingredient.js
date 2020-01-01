import React from 'react';
import Icon from '../../shared/icon';
import '../../styles/recipe.scss';

const Ingredients = ({ingredient}) => {
  return (
    <article className="ingeligent">
      <h3>
        ingredients
      </h3>
      <div className="ingredient-icons">
        <Icon iconToDisplay={'ingredient'} />
      </div>
      <ol>
        {ingredient.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </article>
  )
}

export default Ingredients;