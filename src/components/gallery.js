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
  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipes(data);
    })
  }, []);

  const searchInput = e => {
    console.log(e.target.value);
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
          <ReceipeList items = { receipes } />
        </section>
        <Footer type={'dark'} />
      </main>
    </div>
  )
}

export default Gallery;