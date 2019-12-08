import React, { useState, useEffect } from 'react';
import '../../styles/recipelist.scss';

const RecipeList = ({items}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(items);
  })
  return (
    <div>
      {list.map(item => (
        <div className="card">{ item.title }</div>
      ))}
    </div>
  )
}

export default RecipeList;