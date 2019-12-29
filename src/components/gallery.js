import React, { useContext, useState, useEffect } from 'react';
import ReceipeList from '../shared/receipeList';
import { receipeContext } from '../shared/receipeContext';
import '../styles/gallery.scss';

const Gallery = () => {
  const [receipes, setReceipes] = useState([]);
  const [ getReceipe ] = useContext(receipeContext);
  useEffect(() => {
    setReceipes(getReceipe('all'));
  })
  return (
    <div className="gallery-container">
      <div>
        <ReceipeList items = { receipes } />
      </div>
    </div>
  )
}

export default Gallery;