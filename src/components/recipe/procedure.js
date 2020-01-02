import React from 'react';
import Icon from '../../shared/icon';
import '../../styles/recipe.scss';

const Procedure = ({ beforeYouCook, cookingDirection }) => {
  return (
    <div>
      <header className="title">
        <h3>how to prepare</h3>
      </header>
      <div className="cook">
        <h3>before you cook</h3>
        {beforeYouCook.map(item => (
          <div key={item}>
            <Icon iconToDisplay={'before'} />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="cook">
        <h3>cooking direction</h3>
        {cookingDirection.map(item => (
          <div key={item}>
            <Icon iconToDisplay={'direction'} />
            <p>{item}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Procedure;