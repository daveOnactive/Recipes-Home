import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../styles/recipelist.scss';


const RecipeList = ({ items }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(items);
  }, [items]);
  return (
    <div className="recipe-container">
      {list.map(item => (
          <article key = { item._id } className="card">
            <div className="recipe-image">
              <img src={item.imageUrl} alt="food" />
            </div>
            <header className="recipe-content">
              <h4>{ item.title }</h4>
              <p>{ item.description.slice(0, 70) }...</p>
            </header>
            <Link to={`/recipe/${item.title}`} className="link" title="recipe">
              <button type="button" className="recipe-btn">
                View Recipe
              </button>
            </Link>
          </article>
      ))}
    </div>
  )
}

export default RecipeList;