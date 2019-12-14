import React from 'react';
import '../../styles/recipe.scss';

const Ingeligents = ({ingeligent}) => {
  return (
    <div className="ingeligent">
      <h3>
        ingeligents
      </h3>
      <div className="ingeligent-image">

      </div>
      <ol>
        {ingeligent.map(item => (
          <li>{item}</li>
        ))}
      </ol>

    </div>
  )
}

export default Ingeligents;