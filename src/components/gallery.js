import React, { useState, useEffect } from 'react';
import { data } from '../shared/fetch';
import Loader from '../shared/loader';
import '../styles/gallery.scss';
const ReceipeList = React.lazy(() => import('../shared/receipeList'));

const result = data();

const Gallery = () => {
  const [receipes, setReceipes] = useState([]);
  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipes(data);
    })
  }, []);
  if(receipes.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div>
      <main className="gallery-container">
        <section>
          <ReceipeList items = { receipes } />
        </section>
      </main>
    </div>
  )
}

export default Gallery;