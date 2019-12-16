import React from 'react';
import Icon from '../../shared/icon';
import '../../styles/recipe.scss';

const Procedure = ({ beforeYouCook, cookingDirection }) => {
  return (
    <div>
      <div className="title">
        <h2>how to prepare</h2>
      </div>

      <div className="cook">
        <h3>before you cook</h3>
        {beforeYouCook.map(item => (
          <div key={item}>
            <Icon />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="cook">
        <h3>cooking direction</h3>
        {cookingDirection.map(item => (
          <div key={item}>
            <Icon />
            <p>{item}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Procedure;