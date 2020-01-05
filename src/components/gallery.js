import React, { useState, useEffect } from 'react';
import { data } from '../shared/fetch';
import Loader from '../shared/loader';
import Footer from '../shared/footer';
import ReceipeList from '../shared/receipeList';
import '../styles/gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/form.scss';

const result = data();

const Gallery = () => {
  const [receipes, setReceipes] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(3);
  const [pageNumber, setPageNumber] = useState(0);
  const[showButton, setShowButton] = useState(currentPage);

  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipes(data);
      const page  = Math.ceil(data.length / recipePerPage);
      setPageNumber(page);
    });
  }, []);

  const searchInput = e => {
    console.log(e.target.value);
     setCurrentPage(2);
  }

  // Get current posts
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  let currentRecipe;
  if(receipes) {
    currentRecipe = receipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  }

  const Page = (() => {
    let pageNum = pageNumber;
    let current = currentPage;
    function increase() {
      if(current < pageNum) {
        current += 1;
        setCurrentPage(current);
        setShowButton(current);
      }
    };

    function decrease() {
      if(current > 0) {
        current -= 1;
        setCurrentPage(current);
        setShowButton(current);
    }
    };

    return {
      next : increase,
      prev: decrease
    }

  })();

  const nextPage = () => {
    Page.next();
  };

  const prevPage = () => {
    Page.prev();
  };

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
        <form>
          <div className="form-container">
            <div className="input">
              <input typpe="text" min="3" required placeholder="try 'fried rice'" name="search" onChange={searchInput} />
            </div>
            <div className="search-btn">
              <FontAwesomeIcon
                icon="search"
                color="#fcc395"
              />
            </div>
          </div>
        </form>
        <section>
          <ReceipeList items = { currentRecipe } />
        </section>
        <div className="pagination">
        <button onClick={prevPage} className={showButton === 1 ? 'hide prevBtn' : 'show prevBtn'}>
          <span>
            <FontAwesomeIcon
              icon="arrow-alt-circle-left"
            />
          </span>
          prev
        </button>
        <button onClick={nextPage} className={showButton === pageNumber ? 'hide nextBtn' : 'show nextBtn'}>
          next
          <span>
            <FontAwesomeIcon
              icon="arrow-alt-circle-right"
            />
          </span>
        </button>
      </div>
        <Footer type={'dark'} />
      </main>
    </div>
  )
}

export default Gallery;