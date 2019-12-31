import React, { useContext, useState, useEffect } from 'react';
import ReceipeList from '../shared/receipeList';
import Nav from '../shared/nav';
import { receipeContext } from '../shared/receipeContext';
import Loader from '../shared/loader';
import '../styles/gallery.scss';

const Gallery = () => {
  const [receipes, setReceipes] = useState([]);
  const [ getReceipe ] = useContext(receipeContext);
  useEffect(() => {
    setReceipes(getReceipe('all'));
  })
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