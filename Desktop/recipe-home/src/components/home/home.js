import React, { useState, useEffect } from 'react';
import Landing from './landing';
import Nav from '../nav';
import RecipeList from './recipeList';
import '../../styles/home.scss';


const Home = () => {
  const [result, setResult] = useState('hello');

  useEffect(() => {
    console.log(result);
  });
  return(
    <div className="container">
      <div className="landing-page">
        <Landing />
        <div className="landing-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sunt deserunt quod repellat provident dolore aliquid magni! Accusantium, voluptates itaque! Expedita unde enim magnam rem!</p>
        </div>
      </div>
      <RecipeList items = { api } />
    </div>
  );
}

const api = [
  {
    "id": 1,
    "title": "Egusi Soup (Fried Method)",
    "description": "Particularly, in Nigerian culture, egusi is a popular with pounded yam. These seeds are rich in fat and protein, and add these essential nutrients into West African Cuisine. Nigerian Egusi Soup is a soup thickened with ground melon seeds and contains leafy and other vegetables",
    "ingeligent": [
      "4 cups (500g) Egusi (Melon) seeds",
      "3 cooking spoons red palm oil",
      "Beef: best cut and Shaki (cow tripe)",
      "Fish: dry fish and stockfish",
      "2 tablespoons ground crayfish",
      "Pepper and Salt (to taste)",
      "Vegetable: Nigerian pumpkin leaves, spinach or bitter leaf",
      "3 small stock cubes",
      "1 small ogiri okpei (optional)"
    ],
    "how to": [
  
    ],
    "tools": [

    ],
    "imageUrl": ""
  },
  {
    "id": 2,
    "title": "oha Soup (Fried Method)",
    "description": "Particularly, in Nigerian culture, egusi is a popular with pounded yam. These seeds are rich in fat and protein, and add these essential nutrients into West African Cuisine. Nigerian Egusi Soup is a soup thickened with ground melon seeds and contains leafy and other vegetables",
    "ingeligent": [
      "4 cups (500g) Egusi (Melon) seeds",
      "3 cooking spoons red palm oil",
      "Beef: best cut and Shaki (cow tripe)",
      "Fish: dry fish and stockfish",
      "2 tablespoons ground crayfish",
      "Pepper and Salt (to taste)",
      "Vegetable: Nigerian pumpkin leaves, spinach or bitter leaf",
      "3 small stock cubes",
      "1 small ogiri okpei (optional)"
    ],
    "how to": [
  
    ],
    "tools": [

    ],
    "imageUrl": ""
  }
];

export default Home;

