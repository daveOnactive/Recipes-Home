import React, { useState, useEffect } from 'react';

const Recipe = ({match}) => {
  useEffect(() => {
    console.log(match);
  }, [])

  return (
    <div>
      <h1>Welcome To Recipe Component</h1>
    </div>
  )
}

export default Recipe;