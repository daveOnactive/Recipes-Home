import React from 'react';
import Icon from '../../shared/icon';
import '../../styles/recipe.scss';

const Ingeligents = ({ingredent}) => {
  return (
    <div className="ingeligent">
      <h3>
        ingeligents
      </h3>
      <div className="ingredient-icons">
        <Icon iconToDisplay={'ingredient'} />
      </div>
      <ol>
        {ingredent.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>

    </div>
  )
}

export default Ingeligents;