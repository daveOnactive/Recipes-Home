import React, { useState, useEffect } from 'react';
import { data } from '../shared/fetch';
import Loader from '../shared/loader';
import Footer from '../shared/footer';
import ReceipeList from '../shared/receipeList';
import '../styles/gallery.scss';
import Search from '../shared/search';
import Pagination from './pagination';

const result = data();

const Gallery = () => {
  const [receipes, setReceipes] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(3);

  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipes(data);
    });
  }, []);

  // Get current posts
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  let currentRecipe;
  if(receipes) {
    currentRecipe = receipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  }

  if(!receipes) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div>
      <main className="gallery-container">
        <header>
          <h2>
            available recipes
          </h2>
        </header>
        <section>
          <Search recipes = {receipes} />
          <ReceipeList items = { currentRecipe } />
        </section>
        <Pagination recipePerPage={recipePerPage} totalRecipes={receipes.length} paginate = {paginate} currentPage={currentPage} />
        <Footer type={'dark'} />
      </main>
    </div>
  )
}

export default Gallery;