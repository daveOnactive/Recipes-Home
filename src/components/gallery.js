import React, { useState, useEffect } from 'react';
import Nav from '../shared/nav';
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
      <Nav />
      <div className="gallery-container">
        <div>
          <ReceipeList items = { receipes } />
        </div>
      </div>
    </div>
  )
}

export default Gallery;