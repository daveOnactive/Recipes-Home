import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/recipelist.scss';

const RecipeList = ({ items }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(items);
  })
  return (
    <div className="recipe-container">
      {list.map(item => (
        <Link key = { item.id } to={`/recipe/${item.id}`} className="link">
          <div className="card">
            <div className="recipe-image">
              <img src={item.imageUrl} alt="food" />
            </div>
            <div className="recipe-content">
              <h4>{ item.title }</h4>
              <p>{ item.description.slice(0, 70) }...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RecipeList;