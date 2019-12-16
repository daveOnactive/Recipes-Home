import React from 'react';
import '../../styles/recipe.scss';

const Ingeligents = ({ingredent}) => {
  return (
    <div className="ingeligent">
      <h3>
        ingeligents
      </h3>
      <div className="ingeligent-image">

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