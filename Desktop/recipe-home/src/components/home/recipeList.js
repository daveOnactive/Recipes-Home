import React, { useState, useEffect } from 'react';
import '../../styles/recipelist.scss';

const RecipeList = ({items}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(items);
  })
  return (
    <div className="recipe-container">
      {list.map(item => (
        <div className="card">
          <div className="recipe-image">

          </div>
          <div className="recipe-content">
            <h4>{ item.title }</h4>
            <p>{ item.description.slice(0, 70) }.....</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList;